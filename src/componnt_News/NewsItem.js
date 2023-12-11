import React, { useEffect, useState } from "react";
import News from "./News";
import { Spinner } from "react-bootstrap";
// import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function NewsItem(props) {
  const [articles, setArticles] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const cFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setSpinner(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setSpinner(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${cFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  },[]);

  const fetchMore = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div className="text-center">
        <h1
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "10px" }}
        >
          NewsMonkey - Top {cFirstLetter(props.category)} Headlines
        </h1>

        {spinner && <Spinner />}
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="grid grid-cols-3">
          {articles.map((element) => {
            return (
              <News
                key={element.url}
                title={
                  element.title
                    ? element.title.slice(0, 50)
                    : "lorem this is the title of this image"
                }
                description={
                  element.description
                    ? element.description.slice(0, 80)
                    : "lorem this is the description of this image"
                }
                imageurl={element.urlToImage}
                newsUrl={element.url}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}

// News.defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: "general",
// };

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };

export default NewsItem;
