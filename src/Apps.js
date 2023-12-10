import React, { createContext } from "react";
import Navbar from "./component2/Navbar1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component2/About";
import Contect from "./component2/Contect";
import Home from "./component2/Home";
// import Cust from "./component2/Cust";
// import Table from "./component2/Table";
// import New from "./component2/New";
// import Slider from "./component2/Slider";
// import Button from "./component2/Example.js";
import Example from "./component2/Example.js";
// import SettingDrop from "./component2/SettingDrop";
// import Useref from "./component2/Useref";
// import Usered from "./component2/Usered";
// import Fullscreen from "./component2/Fullscreen";
// import Useeff from "./component2/Useeff";

const appstate = createContext();

function Apps() {




  return (
    <>
      <Home>
        <Router>
          <Navbar />
          {/* <Cust/> */}
          {/* <Table/> */}
          {/* <New/> */}
          {/* <Slider/> */}
          <Example/>
        {/* <SettingDrop/> */}
        {/* <Useref/> */}
        {/* <Usered/> */}
          {/* <Fullscreen/> */}
          {/* <Useeff/> */}
          <Routes >
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contect" element={<Contect />} />
            {/* <Route exact path='/' element={<Home/>}/> */}
          </Routes>
        </Router>
      </Home>
    </>
  );
}

export default Apps;
export { appstate };
