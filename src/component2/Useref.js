import React, { useEffect, useRef, useState } from "react";

function Useref() {
  const [inp, setInp] = useState("");
  // const [count, setCount]=useState(0);

  const counter = useRef();
  //   useEffect(() => {
  //     // counter.current = counter.current+1
  //     counter.current = inp;
  //   },[inp]);

  const clo = () => {
    counter.current.focus();
  };

  return (
    <>
      <input
        ref={counter}
        className=" w-32 h-10 border-2"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
      {counter.current}
      <button onClick={clo}> chick me</button>
    </>
  );
}

export default Useref;
