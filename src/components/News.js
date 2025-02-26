import React from "react";
import { Link } from "react-router-dom";

function News(props) {
  return (
    <div className="mt-6">
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <img
          src={props.imageurl
            ? props.imageurl
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRMf2yptTiiGUlpqyWwmCinZega3BE3T9mA&usqp=CAU"}
          alt="news"
          className="w-full h-56 object-cover rounded-t-lg"
        />

        {/* Content Section */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 truncate">{props.title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-2 truncate">{props.description}</p>

          {/* Read More Button */}
          <Link to={props.newsUrl} target="_blank" rel="noopener noreferrer">
            <button className="mt-3 w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default News;
