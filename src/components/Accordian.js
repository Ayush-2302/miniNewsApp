import React, { useState } from "react";

function Accordian() {
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
      <div className=" grid  ">
        <div
          className={`  ${
            open ? " text-red-600" : ""
          }  container w-11/12 m-auto mt-3 pb-4 rounded-xl h-auto border-2  border-gray-300`}
        >
          {open &&
            open.map((ele, index) => (
              <div
                className={`accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300`}
              >
                <div
                  onClick={() => toggle(index)}
                  className="flex justify-between mr-5 ml-4"
                >
                  <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                    {" "}
                    {ele.que}
                  </h2>
                  <button> {ele.open ? "‹" : "»"}</button>
                </div>
                {
                  <p
                    className={`ml-16 mt-3 md:text-sm sm:text-sm ${
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
          className={`  ${
            open ? " text-green-600" : ""
          } container w-11/12 m-auto mt-3 pb-4 rounded-xl h-auto border-2 border-gray-300`}
        >
          {open2 &&
            open2.map((ele, index) => (
              <div
                className={` accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300`}
              >
                <div
                  onClick={() => toggle2(index)}
                  className="flex justify-between mr-5 ml-4"
                >
                  <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                    {" "}
                    {ele.que}
                  </h2>
                  <button> {ele.open ? "‹" : "»"}</button>
                </div>
                {
                  <p
                    className={`ml-16 mt-3 md:text-sm sm:text-sm ${
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
          className={` ${
            open ? " text-orange-600" : ""
          } container w-11/12 m-auto mt-4 p-2 grid col-span-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}
        >
          {open3 &&
            open3.map((ele, index) => (
              <div
                onClick={() => toggle3(index)}
                className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
              >
                <div className="flex justify-between mr-5 ml-4">
                  <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                    {" "}
                    {ele.que}
                  </h2>
                  <button> {ele.open ? "‹" : "»"}</button>
                </div>

                <p
                  className={`ml-16 mt-3 md:text-sm sm:text-sm ${
                    ele.open ? "display" : "hidden"
                  }`}
                >
                  {ele.ans}
                </p>
              </div>
            ))}
        </div>

        <div
          className={` ${
            open ? " text-yellow-500" : ""
          } container w-11/12 m-auto mt-4 p-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}
        >
          {open4 &&
            open4.map((ele, index) => (
              <div
                onClick={() => toggle4(index)}
                className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
              >
                <div className="flex justify-between mr-5 ml-4">
                  <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                    {" "}
                    {ele.que}
                  </h2>
                  <button> {ele.open ? "‹" : "»"}</button>
                </div>

                <p
                  className={`ml-16 mt-3 md:text-sm sm:text-sm ${
                    ele.open ? "display" : "hidden"
                  }`}
                >
                  {ele.ans}
                </p>
              </div>
            ))}
        </div>

        <div
          className={`  ${
            open ? " text-cyan-600" : ""
          } container w-11/12 m-auto mt-4 p-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}
        >
          {open5 &&
            open5.map((ele, index) => (
              <div
                onClick={() => toggle5(index)}
                className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
              >
                <div className="flex justify-between mr-5 ml-4">
                  <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                    {" "}
                    {ele.que}
                  </h2>
                  <button> {ele.open ? "‹" : "»"}</button>
                </div>

                <p
                  className={`ml-16 mt-3 md:text-sm sm:text-sm ${
                    ele.open ? "display" : "hidden"
                  }`}
                >
                  {ele.ans}
                </p>
              </div>
            ))}
        </div>
        <div
          className={`  ${
            open ? " text-purple-600" : ""
          } container w-11/12 m-auto mt-4 p-2 col-span-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}
        >
          {open6 &&
            open6.map((ele, index) => (
              <div
                onClick={() => toggle6(index)}
                className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
              >
                <div className="flex justify-between mr-5 ml-4">
                  <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                    {" "}
                    {ele.que}
                  </h2>
                  <button> {ele.open ? "‹" : "»"}</button>
                </div>

                <p
                  className={`ml-16 mt-3 md:text-sm sm:text-sm ${
                    ele.open ? "display" : "hidden"
                  }`}
                >
                  {ele.ans}
                </p>
              </div>
            ))}
        </div>

        <div
          className={`  ${
            open ? " text-green-600" : ""
          } container w-11/12 m-auto mt-4 p-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}
        >
          {open7 &&
            open7.map((ele, index) => (
              <div
                onClick={() => toggle7(index)}
                className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
              >
                <div className="flex justify-between mr-5 ml-4">
                  <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                    {" "}
                    {ele.que}
                  </h2>
                  <button> {ele.open ? "‹" : "»"}</button>
                </div>

                <p
                  className={`ml-16 mt-3 md:text-sm sm:text-sm ${
                    ele.open ? "display" : "hidden"
                  }`}
                >
                  {ele.ans}
                </p>
              </div>
            ))}
        </div>
        <div
          className={`  ${
            open ? " text-pink-600" : ""
          } container w-11/12 m-auto mt-4 p-2 mb-4 rounded-xl h-auto border-2 border-gray-300`}
        >
          {open8 &&
            open8.map((ele, index) => (
              <div
                onClick={() => toggle8(index)}
                className="accordian w-5/6  m-auto mt-4 p-2    rounded-lg shadow-2xl  border-2 border-gray-300"
              >
                <div className="flex justify-between mr-5 ml-4">
                  <h2 className=" lg:text-lg sm:text-sm md:text-sm  text-sm font-bold">
                    {" "}
                    {ele.que}
                  </h2>
                  <button> {ele.open ? "‹" : "»"}</button>
                </div>

                <p
                  className={`ml-16 mt-3 md:text-sm sm:text-sm ${
                    ele.open ? "display" : "hidden"
                  }`}
                >
                  {ele.ans}
                </p>
              </div>
            ))}
        </div>

        <div className="endline w-11/12 h-4 rounded-2xl border-2 border-gray-200 shadow-inner mb-5 ml-6"></div>
        <div className="endline w-11/12 h-4 rounded-2xl border-2 border-gray-200 shadow-inner mb-5 ml-6"></div>
      </div>
    </>
  );
}

export default Accordian;
