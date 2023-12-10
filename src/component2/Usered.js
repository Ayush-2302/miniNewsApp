import React,{useReducer} from "react";


const first = (state, action) => {
    if (action.type==="inc") {
        return state+2;
    }
    else  if (action.type==="dec") {
        return state-2;
    }
    else  if (action.type==="mul") {
        return state*2;
    }

    return state;
  };
function Usered() {
  const [state, dispatch] = useReducer(first, 0);
  return (
    <>
        {state}
    <div className=" space-x-5 my-4">
      <buttton onClick={() => dispatch({ type: "inc" })}>increment</buttton>
      <buttton onClick={() => dispatch({ type: "dec" })}>decrement</buttton>
      <buttton onClick={() => dispatch({ type: "mul" })}>multiply</buttton>
      </div>
    </>
  );
}

export default Usered;
