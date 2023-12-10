import React, { useState } from "react";

function Example() {
  const arr = [
    {
      img: "https://images.unsplash.com/photo-1696384036025-c7d7b7f6584d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1691379635079-9f438036ea58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1694596016112-1d2ee07c99f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const [ind,setInd]=useState()



  return (
    <>
      <div className="btn absolute top-52  z-30 text-white ">
        <button className="  text-5xl ">‹</button>
        <button className=" text-5xl ">›</button>
      </div>

      {arr.map((ele,index) => (
        <div className="img ">
          <img src={ele.img} alt="" className=" absolute h-1/2 w-1/4" />
        </div>
      ))}
    </>
  );
}

export default Example;
