import React, { useState } from "react";

function Fullscreen() {
  const [arr, setArr] = useState([
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6B10rCOl53fpw543Ng6uaLtf0kg4pGcRX1Q&usqp=CAU"
          alt="img"
          className=" w-14 h-14"
        />
      ),
      name: "Cactus mini plant",
      quantity: "quantity 5",
      prize: "$5398",
    },
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6B10rCOl53fpw543Ng6uaLtf0kg4pGcRX1Q&usqp=CAU"
          alt="img"
          className=" w-14 h-14"
        />
      ),
      name: "Cactus mini plant",
      quantity: "quantity 5",
      prize: "$5398",
    },
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6B10rCOl53fpw543Ng6uaLtf0kg4pGcRX1Q&usqp=CAU"
          alt="img"
          className=" w-14 h-14"
        />
      ),
      name: "Cactus mini plant",
      quantity: "quantity 5",
      prize: "$5398",
    },
  ]);

  const [re,setRE]=useState(false)


const remove=(index)=>{
  // const del=[...arr]
// arr.forEach(element => {
//   element== setRE(!re)
// })

const del=[...arr]
for (let i = 0; i < del.length; i++) {
      if (index == i) {
        del[i].re = false ;
      }
}
setRE(!re)
}



// const remove = (index) => {
  // const del=[...arr]
//   for (let i = 0; i < del.length; i++) {
//     if (index !== i) {
//       del[i].re = re ;
//     }
//     setRE(!re)}
// };

  return (
    <>

        <div className="empty hidden">Empty</div>

    <div className={` w-96  border-2 m-auto bg-green-200`}>
            {arr.map((ele,index) => (
        <div className={` ${re?"hidden":""} flex  h-24 border-2 mb-1  justify-between`}>
         <div className="img"> {ele.img}</div>
          <div className="">
           <div className="p"> {ele.name}</div>
           <div className="p"> {ele.quantity}</div>
           <div className="p"> {ele.prize}</div>
          </div>
          <div onClick={()=>{remove()}}  className="del hover:cursor-pointer">
           delete
          </div>
          
          
          </div>
      ))}
      </div>

    </>
  );
}

export default Fullscreen;
