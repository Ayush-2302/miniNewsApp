import React, { useState } from "react";

function Record() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, form]);
    setForm({});
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <>
      <div className="search flex justify-center mt-10 space-x-8">
        <textarea
          valve={form}
          onChange={(event) => setForm({...form, name:event.target.value})}
          lable="name"
          className=" p-2 border-2 w-60 h-16 border-gray-200 shadow-inner rounded-2xl "
        />
        <button
          onClick={addData}
          className=" text-2xl w-20 h-fit p-2 rounded-2xl bg-red-500"
        >
          Add
        </button>
      </div>
      <div className="container  w-3/4 h-1/2 border-2 rounded-lg border-gray-300 m-auto  mt-6">
        <div className="record  text-center   mt-5 space-x-8">
         

          {data.map((element, index) => {
            return (
              <>
                <div key={index} className=" flex justify-center my-3  space-x-8 datavalue">
                  <p className="w-60 p-2 h-auto rounded-lg border-2 border-gray-200 shadow-inner">{element.name} </p>

                  <button
                  onClick={(index) => removeItem(index)}
                  className=" text-2xl w-20 h-fit p-2 rounded-lg bg-red-500"
                >
                  Delete
                </button>
                </div>

                
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Record;
