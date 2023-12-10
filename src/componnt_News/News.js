import React from "react";
import { Link } from "react-router-dom";

function News(props) {
  return (
    <>
        
      <div className="mt-4">
        <div className="w-80  rounded-md border-2 m-auto  border-gray-400 ">
          <img
            src={props.imageurl?props.imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRMf2yptTiiGUlpqyWwmCinZega3BE3T9mA&usqp=CAU"}
            alt=" no img"
            className=" rounded-md w-11/12 h-44 mt-2 m-auto"
          />
          <p className=" font-bold ml-2">{props.title}</p>
          <p className="ml-3">{props.description}</p>
          <Link href={props.newsUrl} target="_">
            <button className=" w-fit mb-1 p-1 pl-4 pr-4 text-white  bg-blue-500 rounded-md ml-4 text-center">
              Read more 
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default News;
