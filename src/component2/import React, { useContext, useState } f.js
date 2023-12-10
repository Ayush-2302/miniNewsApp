import React, { useContext, useState } from "react";
import { val } from "./ValNav";

function Accordian() {
  const accod = useContext(val);

  const [open, Setopen] = useState([
    {
      que: " Accordion Item #1",
      ans: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
    {
      que: "Accordion Item #2",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
    {
      que: "Accordion Item #3",
      ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
  ]);

  const [open2, Setopen2] = useState([
    {
      que: " Accordion Item #1",
      ans: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
    {
      que: "Accordion Item #2",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
    {
      que: "Accordion Item #3",
      ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
  ]);

  const [open3, Setopen3] = useState([
    {
      que: " Accordion Item #1",
      ans: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
    {
      que: "Accordion Item #2",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
    {
      que: "Accordion Item #3",
      ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
  ]);

  const [open4, Setopen4] = useState([
    {
      que: " Accordion Item #1",
      ans: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
    {
      que: "Accordion Item #2",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
    {
      que: "Accordion Item #3",
      ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
  ]);

  const [open5, Setopen5] = useState([
    {
      que: " Accordion Item #1",
      ans: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
    {
      que: "Accordion Item #2",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
    {
      que: "Accordion Item #3",
      ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
  ]);

  const [open6, Setopen6] = useState([
    {
      que: " Accordion Item #1",
      ans: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
    {
      que: "Accordion Item #2",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
    {
      que: "Accordion Item #3",
      ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
  ]);

  const [open7, Setopen7] = useState([
    {
      que: " Accordion Item #1",
      ans: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
    {
      que: "Accordion Item #2",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
    {
      que: "Accordion Item #3",
      ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
  ]);
  const [open8, Setopen8] = useState([
    {
      que: " Accordion Item #1",
      ans: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
    {
      que: "Accordion Item #2",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
    {
      que: "Accordion Item #3",
      ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus provident laborum mollitia ab? Voluptatum error tempore consequuntur dolor numquam odio porro obcaecati fugiat earum officia beatae natus, dolore ea.",
      open: false,
    },
  ]);
  const [href, setHref] = useState(false);
  const handleHrf = () => {
    setHref(!href);
    setTarget(false);
  };
  const [target, setTarget] = useState(false);
  const handleTarget = () => {
    setTarget(!target);
    setHref(false);
  };

  const [first, setFirst] = useState(false);
  const handleFirst = () => {
    setFirst(!first);
    setSecond(false);
    setBoth(false);
  };
  const [second, setSecond] = useState(false);
  const handleSecond = () => {
    setSecond(!second);
    setFirst(false);
    setBoth(false);
  };
  const [both, setBoth] = useState(false);
  const handleBoth = () => {
    setBoth(!both);
    setSecond(false);
    setFirst(false);
  };

  const toggle = (index) => {
    const change = [...open];

    for (let i = 0; i < change.length; i++) {
      if (index !== i) {
        change[i].open = false;
      }
    }

    change[index].open = !change[index].open;

    Setopen(change);
  };

  const toggle2 = (index) => {
    const change = [...open2];

    for (let i = 0; i < change.length; i++) {
      if (index !== i) {
        change[i].open = false;
      }
    }

    change[index].open = !change[index].open;

    Setopen2(change);
  };

  const toggle3 = (index) => {
    const change = [...open3];

    for (let i = 0; i < change.length; i++) {
      if (index !== i) {
        change[i].open = false;
      }
    }

    change[index].open = !change[index].open;

    Setopen3(change);
  };

  const toggle4 = (index) => {
    const change = [...open4];

    for (let i = 0; i < change.length; i++) {
      if (index !== i) {
        change[i].open = false;
      }
    }

    change[index].open = !change[index].open;

    Setopen4(change);
  };

  const toggle5 = (index) => {
    const change = [...open5];

    for (let i = 0; i < change.length; i++) {
      if (index !== i) {
        change[i].open = false;
      }
    }

    change[index].open = !change[index].open;

    Setopen5(change);
  };

  const toggle6 = (index) => {
    const change = [...open6];

    for (let i = 0; i < change.length; i++) {
      if (index !== i) {
        change[i].open = false;
      }
    }

    change[index].open = !change[index].open;

    Setopen6(change);
  };

  const toggle7 = (index) => {
    const change = [...open7];

    for (let i = 0; i < change.length; i++) {
      if (index !== i) {
        change[i].open = false;
      }
    }

    change[index].open = !change[index].open;

    Setopen7(change);
  };
  const toggle8 = (index) => {
    const change = [...open8];

    for (let i = 0; i < change.length; i++) {
      if (index !== i) {
        change[i].open = false;
      }
    }

    change[index].open = !change[index].open;

    Setopen8(change);
  };
  return (
    <>
      <div className="acc_body  ">
        <div className="dashboardcont  pt-5 text-white text-3xl pl-10 pr-4 flex  h-32 justify-between">
          Accordion{" "}
          <p className=" text-sm m-3  flex space-x-5">
            <p>Advanced UI </p> <p>»</p>{" "}
            <p className=" font-bold"> Accordions</p>
          </p>
        </div>
        <div className=" -mt-16 ">
          <div className="flex1  ">
            <div
              className={`  container_acc `}
              style={{
                backgroundColor: accod.mode === "light" ? "white" : "#17171c",
                color: accod.mode === "light" ? "black" : "white",
              }}
            >
              <div className=" text-lg font-bold p-1 ">Basic Accordion</div>
              <hr />
              {open &&
                open.map((ele, index) => (
                  <div
                    className={`accordian  w-11/12  m-auto mt-4 p-1    rounded-md shadow-2xl  border-2 border-gray-300`}
                  >
                    <div
                      onClick={() => toggle(index)}
                      className="flex justify-between mr-5 ml-4"
                    >
                      <h2 className="  lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                        {" "}
                        {ele.que}
                      </h2>
                      <button> {ele.open ? "‹" : "»"}</button>
                    </div>
                    {
                      <p
                        className={`ml-16 mt-3 md:text-sm sm:text-sm text-gray-500 ${
                          ele.open ? "display" : "hidden"
                        }`}
                      >
                        {ele.ans}
                      </p>
                    }
                  </div>
                ))}
            </div>

            <div
              className={`   container_acc `}
              style={{
                backgroundColor: accod.mode === "light" ? "white" : "#17171c",
                color: accod.mode === "light" ? "black" : "white",
              }}
            >
              <div className=" text-lg  p-1">
                <p className="font-bold">Always Open Accordion</p>
                <p className="pl-10 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  doloremque quia eligendi molestiae itaque sed placeat
                  repudiandae optio asperiores possimus{" "}
                </p>
              </div>

              <hr />

              {open2 &&
                open2.map((ele, index) => (
                  <div
                    className={` accordian w-11/12 m-auto mt-4 p-1 rounded-md shadow-2xl  border-2 border-gray-300`}
                  >
                    <div
                      onClick={() => toggle2(index)}
                      className="flex  justify-between mr-5 ml-4"
                    >
                      <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                        {" "}
                        {ele.que}
                      </h2>
                      <button> {ele.open ? "‹" : "»"}</button>
                    </div>
                    {
                      <p
                        className={`ml-16 mt-3 md:text-sm sm:text-sm  text-gray-500 ${
                          ele.open ? "display" : "hidden"
                        }`}
                      >
                        {ele.ans}
                      </p>
                    }
                  </div>
                ))}
            </div>
          </div>
          <div
            className=" pl-8 text-base mt-4 font-bold"
            style={{ color: accod.mode === "light" ? "black" : "white" }}
          >
            Solid Colour :
          </div>

          <div
            className={`  container_acc  `}
            style={{
              backgroundColor: accod.mode === "light" ? "white" : "#17171c",
              color: accod.mode === "light" ? "black" : "white",
            }}
          >
            <div className=" text-lg  p-1">
              <p className="font-bold ">Flush Accordion </p>
              <p className="pl-10 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                doloremque quia eligendi molestiae itaque sed placeat
                repudiandae optio asperiores possimus{" "}
              </p>
            </div>

            <hr />
            {open3 &&
              open3.map((ele, index) => (
                <div
                  onClick={() => toggle3(index)}
                  className="accordian w-full  mt-4  rounded-md shadow-2xl  "
                >
                  <div className="flex justify-between mr-5 ml-4 text-orange-500">
                    <h2 className=" lg:text-lg sm:text-sm md:text-sm   text-sm font-bold">
                      {" "}
                      {ele.que}
                    </h2>
                    <button> {ele.open ? "‹" : "»"}</button>
                  </div>
                  <hr />
                  <p
                    className={`ml-16 mt-3 md:text-sm p-3 sm:text-sm text-gray-500 ${
                      ele.open ? "display" : "hidden"
                    }`}
                  >
                    {ele.ans}
                  </p>
                </div>
              ))}
          </div>
          <div className="flex2  ">
            <div
              className={` container_acc`}
              style={{
                backgroundColor: accod.mode === "light" ? "white" : "#17171c",
                color: accod.mode === "light" ? "black" : "white",
              }}
            >
              {open4 &&
                open4.map((ele, index) => (
                  <div
                    onClick={() => toggle4(index)}
                    className="accordian w-11/12  m-auto mt-4 p-1    rounded-md shadow-2xl  border-2 border-gray-300"
                  >
                    <div className="flex justify-between mr-5 ml-4 text-yellow-500">
                      <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                        {" "}
                        {ele.que}
                      </h2>
                      <button> {ele.open ? "‹" : "»"}</button>
                    </div>

                    <p
                      className={`ml-16 mt-3 md:text-sm sm:text-sm text-yellow-500 ${
                        ele.open ? "display" : "hidden"
                      }`}
                    >
                      {ele.ans}
                    </p>
                  </div>
                ))}
            </div>

            <div
              className={`  container_acc `}
              style={{
                backgroundColor: accod.mode === "light" ? "white" : "#17171c",
                color: accod.mode === "light" ? "black" : "white",
              }}
            >
              {open5 &&
                open5.map((ele, index) => (
                  <div
                    onClick={() => toggle5(index)}
                    className="accordian w-11/12  m-auto mt-4 p-1    rounded-md shadow-2xl  border-2 border-gray-300"
                  >
                    <div className="flex justify-between mr-5 ml-4 text-cyan-600">
                      <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                        {" "}
                        {ele.que}
                      </h2>
                      <button> {ele.open ? "‹" : "»"}</button>
                    </div>

                    <p
                      className={`ml-16 mt-3 md:text-sm sm:text-sm text-cyan-600 ${
                        ele.open ? "display" : "hidden"
                      }`}
                    >
                      {ele.ans}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div
            className=" pl-8 text-base font-bold mt-4"
            style={{ color: accod.mode === "light" ? "black" : "white" }}
          >
            {" "}
            Coloured Border :
          </div>

          <div className="flex3  ">
            <div
              className={`  ${open ? " text-purple-600" : ""} container_acc `}
              style={{
                backgroundColor: accod.mode === "light" ? "white" : "#17171c",
                color: accod.mode === "light" ? "black" : "white",
              }}
            >
              {open6 &&
                open6.map((ele, index) => (
                  <div
                    onClick={() => toggle6(index)}
                    className="accordian w-11/12  m-auto mt-4 p-1    rounded-md shadow-2xl  border-2 border-purple-300"
                  >
                    <div className="flex justify-between mr-5 ml-4">
                      <h2 className=" lg:text-lg sm:text-sm md:text-sm text-purple-600 text-sm font-bold">
                        {" "}
                        {ele.que}
                      </h2>
                      <button> {ele.open ? "‹" : "»"}</button>
                    </div>

                    <p
                      className={`ml-16 mt-3 md:text-sm sm:text-sm text-purple-600 ${
                        ele.open ? "display" : "hidden"
                      }`}
                    >
                      {ele.ans}
                    </p>
                  </div>
                ))}
            </div>

            <div
              className={`  ${open ? " text-green-600" : ""} container_acc `}
              style={{
                backgroundColor: accod.mode === "light" ? "white" : "#17171c",
                color: accod.mode === "light" ? "black" : "white",
              }}
            >
              {open7 &&
                open7.map((ele, index) => (
                  <div
                    onClick={() => toggle7(index)}
                    className="accordian w-11/12  m-auto mt-4 p-1    rounded-md shadow-2xl  border-2 border-gray-300"
                  >
                    <div className="flex justify-between mr-5 ml-4">
                      <h2 className=" lg:text-lg sm:text-sm md:text-sm text-green-600 text-sm font-bold">
                        {" "}
                        {ele.que}
                      </h2>
                      <button> {ele.open ? "‹" : "»"}</button>
                    </div>

                    <p
                      className={`ml-16 mt-3 md:text-sm sm:text-sm text-green-600 ${
                        ele.open ? "display" : "hidden"
                      }`}
                    >
                      {ele.ans}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div
            className=" pl-8 text-base font-bold mt-4"
            style={{ color: accod.mode === "light" ? "black" : "white" }}
          >
            {" "}
            Coloured Background :
          </div>

          <div
            className={`   container_acc  `}
            style={{
              backgroundColor: accod.mode === "light" ? "white" : "#17171c",
              color: accod.mode === "light" ? "black" : "white",
            }}
          >
            {open8 &&
              open8.map((ele, index) => (
                <div
                  onClick={() => toggle8(index)}
                  className={` accordian  m-auto mt-4 p-1 bg-blue-400   rounded-md shadow-2xl  `}
                >
                  <div
                    className={`  text-gray-900  rounded-md  p-1 flex justify-between mr-5 ml-4`}
                  >
                    <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                      {" "}
                      {ele.que}
                    </h2>
                    <button> {ele.open ? "‹" : "»"}</button>
                  </div>

                  <p
                    className={`ml-16 mt-3 md:text-sm sm:text-sm  ${
                      ele.open ? "display" : "hidden"
                    }`}
                  >
                    {ele.ans}
                  </p>
                </div>
              ))}
          </div>
          <div className="flex3">
            <div
              className={` container_acc`}
              style={{
                backgroundColor: accod.mode === "light" ? "white" : "#17171c",
                color: accod.mode === "light" ? "black" : "white",
              }}
            >
              <p className=" font-bold text-lg p-4">Example</p>
              <hr />
              <div className="flex flex-wrap space-y-2 p-5 space-x-1">
                <button
                  onClick={() => handleHrf()}
                  className=" w-fit p-1 pl-3 pr-3 bg-purple-600 text-white rounded-md"
                >
                  {" "}
                  Link with href
                </button>{" "}
                <button
                  onClick={() => handleTarget()}
                  className=" w-fit p-1 pl-3 pr-3 bg-orange-600 text-white rounded-md"
                >
                  {" "}
                  Button with data-bs-target
                </button>
              </div>
              <p
                className={`${
                  href ? "display" : "hidden"
                }   w-5/6 m-auto border-2 shadow-inner p-3`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat error molestias voluptatibus vel ad ab cum nam cumque
                deleniti. Repudiandae incidunt est cumque modi itaque esse quia
                assumenda at placeat.
              </p>
              <p
                className={`${
                  target ? "display" : "hidden"
                }   w-5/6 m-auto border-2 shadow-inner p-3`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat error molestias voluptatibus vel ad ab cum nam cumque
                deleniti. Repudiandae incidunt est cumque modi itaque esse quia
                assumenda at placeat.
              </p>
            </div>

            <div
              className={` container_acc`}
              style={{
                backgroundColor: accod.mode === "light" ? "white" : "#17171c",
                color: accod.mode === "light" ? "black" : "white",
              }}
            >
              <p className="   p-4">Muttiple terget collapse</p>
              <hr />
              <div className="flex flex-wrap space-y-2  p-5 space-x-1">
                <button
                  onClick={() => handleFirst()}
                  className=" w-fit p-1 pl-3 pr-3 bg-purple-600 text-white rounded-md"
                >
                  Toggle first element
                </button>
                <button
                  onClick={() => handleSecond()}
                  className=" w-fit p-1 pl-3 pr-3 bg-green-600 text-white rounded-md"
                >
                  Toggle second element
                </button>
                <button
                  onClick={() => handleBoth()}
                  className=" w-fit p-1 pl-3 pr-3 bg-orange-600 text-white rounded-md"
                >
                  Toggle both element
                </button>
              </div>
              <p
                className={`${
                  first ? "" : "hidden"
                } w-1/2 shadow-inner border-2 p-4 ml-5`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat error molestias voluptatibus vel ad ab cum nam cumque
                deleniti. Repudiandae incidunt est cumque modi itaque esse quia
                assumenda at placeat.
              </p>
              <p
                className={`${
                  second ? "" : "hidden"
                }  w-1/2 shadow-inner border-2 p-4 ml-72`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat Repudiandae incidunt est cumque modi itaque esse quia
                assumenda at placeat.
              </p>
              <div className={`${both ? "" : " hidden"} flex`}>
                <p className={` w-1/2 shadow-inner border-2 p-4 ml-5`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Placeat error molestias voluptatibus vel ad ab cum nam cumque
                  deleniti. Repudiandae incidunt est cumque modi itaque esse
                  quia assumenda at placeat.
                </p>
                <p className={` w-1/2 border-2 shadow-inner p-4 ml-5`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Placeat Repudiandae incidunt est cumque modi itaque esse quia
                  assumenda at placeat.
                </p>
              </div>
            </div>
          </div>

          <div className="endline w-11/12 h-4 rounded-2xl border-2 mt-5 border-gray-200 shadow-inner mb-5 ml-6"></div>
        </div>
      </div>
    </>
  );
}

export default Accordian;
