import React from "react";
import lang from "../asserts/languagepng.png"

function Table() {
  return (
    <>
       <div className="card overflow-x-auto card2 w-1/4 " >
              <div className="top flex-shrink break-words  flex justify-between">
                <h1 className=" text-lg font-bold"> Sale By Country </h1>
                <button className="w-fit flex items-center text-sm text-black bg-gray-100 rounded-lg p-1">
                  View All
                <img src={lang} className=" w-8 h-8" alt="" />
                </button>
              </div>
              <hr className=" m-3" />

              <table className=" w-full  ml-10   ">
                <thead className=" flex justify-around">       
                 <th>Country</th>
                  <th className=" pl-10"> Sales </th>
                  <th> Bounce</th>
                  </thead>

                <tbody className=" text-sm font-bold">
                  <tr className=" flex justify-around">
                    <td className=" flex items-center ">
                      <img
                        src={lang}
                        className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                        alt=""
                      />
                      Canada
                    </td>
                    <td>2500</td>
                    <td className=" text-green-500 text-xs">24%</td>
                  </tr>
                  <hr className=" m-3" />

                  <tr className=" flex justify-around">
                    <td className=" flex items-center ">
                      <img
                        src={lang}
                        className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                        alt=""
                      />
                      Germany
                    </td>
                    <td>846</td>
                    <td className=" text-red-500 text-xs">22.3%</td>
                  </tr>
                  <hr className=" m-3" />
                  <tr className=" flex justify-around">
                    <td className=" flex items-center">
                      {" "}
                      <img
                        src={lang}
                        className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                        alt=""
                      />
                      Mexico
                    </td>
                    <td>1024</td>
                    <td className="  text-red-500 text-xs">14.8%</td>
                  </tr>
                  <hr className=" m-3" />
                  <tr className=" flex justify-around">
                    <td className=" flex items-center">
                      {" "}
                      <img
                        src={lang}
                        className=" mr-2 p-1  h-8 w-8  rounded-full bg-gray-100 "
                        alt=""
                      />
                      Russia
                    </td>
                    <td className=" pl-3">482</td>
                    <td className="  text-green-500 text-xs pl-2">05.8%</td>
                  </tr>
                  <hr className=" m-3" />
                  <tr className=" flex justify-around">
                    <td className=" flex items-center">
                      {" "}
                      <img
                        src={lang}
                        className=" mr-2 p-1 h-8 w-8  rounded-full bg-gray-100 "
                        alt=""
                      />
                      U.S.A
                    </td>
                    <td>1410</td>
                    <td className=" text-red-500 text-xs">13.08%</td>
                  </tr>
                </tbody>
              </table>
            </div>
      
    </>
  );
}

export default Table;
