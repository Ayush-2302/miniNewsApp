import React, { useEffect, useState } from 'react'

function Useeff() {

    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    const increase=()=>{
        setCount(count+1)
    }
    const decrease=()=>{
        setCount1(count1-1)
    }
useEffect(()=>{
    window.alert("useffect called")
},[count,count1])

  return (

<>
{/* <div className="btn1 text-lg p-4 ml-2">{count}</div> */}
<div className="flex space-x-2 ml-4">
<button onClick={increase} className=' text-lg  w-fit p-1 pl-2 pr-2 rounded-md bg-blue-300
'>increase{count}</button>
<button onClick={decrease} className=' text-lg  w-fit p-1 pl-2 pr-2 rounded-md bg-blue-300'>decrease{count1}</button> </div>


</>

    )
}

export default Useeff