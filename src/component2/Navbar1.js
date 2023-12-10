import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const [home, setHome] = useState(false);

  const [contect, setContect] = useState(false);

  return (
    <nav className="bg-blue-500  items-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-semibold text-lg">
          <ul className=" flex space-x-4 justify-center mt-8 ">
            <Link to="/">
              <li onClick={() => setHome(!home)}>
                Home
                <ul className={`${home ? "" : "hidden"}`}>
                  <li>Home</li>
                  <li>profile </li>
                  <li>About </li>
                  <li>Contect </li>
                  <li>Query </li>
                </ul>
              </li>
            </Link>
            <Link to="#">
              <li>profile </li>
            </Link>
            <Link to="/contect">
              <li>Contect </li>
            </Link>
            <li onClick={() => setContect(!contect)}>
              Contect
              <ul className={`${contect ? "" : "hidden"}`}>
                <li>Home</li>
                <li>profile </li>
                <li>About </li>
                <li>Contect </li>
                <li>Query </li>
              </ul>
            </li>
            <Link to="/about">
              <li>About </li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-md"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 19l-2 2-7-7-7 7-2-2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
