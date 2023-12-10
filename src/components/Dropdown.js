import React, { useState } from "react";

function Dropdown() {
  const [home, setHome] = useState(false);
  const [Contect, setContect] = useState(false);

  return (
    <>
      <nav>
        <ul className=" flex space-x-4 justify-center mt-8">
          <li onClick={() => setHome(!home)}>
            Home
            <ul className={`${home?"":"hidden"}`}>
              <li>Home</li>
              <li>profile </li>
              <li>About </li>
              <li>Contect </li>
              <li>Query </li>
            </ul>
          </li>
          <li>profile </li>
          <li>About </li>
          <li onClick={() => setContect(!Contect)}>
            Contect
            <ul className={`${Contect?"":"hidden"}`}>
              <li>Home</li>
              <li>profile </li>
              <li>About </li>
              <li>Contect </li>
              <li>Query </li>
            </ul>
          </li>
          <li>Query </li>
        </ul>
      </nav>
    </>
  );
}

export default Dropdown;
