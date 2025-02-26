import React, { useEffect, useState } from "react";
import News from "./News";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import { newsData } from "./sample";

function NewsItem(props) {
  const [articles, setArticles] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const cFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const updateNews = async () => {
      if (isFetching) return;
      try {
        setIsFetching(true);
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setSpinner(true);
        let data = await fetch(url);

        props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setSpinner(false);
        props.setProgress(100);
      } catch (error) {
        console.log(error);
        setSpinner(false);
      } finally {
        setIsFetching(false);
      }
    };
    document.title = `${cFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadMore = async () => {
    setPage(page + 1);
  };

  return (
    <div className="px-4 py-8 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 mt-4">
          NewsMonkey - Top {cFirstLetter(props.category)} Headlines
        </h1>
        {spinner && <Spinner animation="border" variant="primary" />}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map((element) => {
          return (
            <News
              key={element.url}
              title={
                element.title
                  ? element.title.slice(0, 50)
                  : "No title available"
              }
              description={
                element.description
                  ? element.description.slice(0, 80)
                  : "No description available"
              }
              imageurl={element.urlToImage}
              newsUrl={element.url}
            />
          );
        })}
      </div>

      {articles.length < totalResults && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={isFetching}
          >
            {isFetching ? (
              <Spinner animation="border" size="sm" variant="light" />
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </div>
  );
}

NewsItem.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

NewsItem.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsItem;
