import React from "react";
import { Link } from "react-router-dom";

function Navbar3() {
  return (
    <nav className=" flex items-center sticky top-0 bg-black h-[63px]">
      <ul className=" flex space-x-5 text-white p-4 items-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">
            Business
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">
            Entertainment
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general">
            General
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">
            Health
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">
            Science
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">
            Sports
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">
            Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar3;
