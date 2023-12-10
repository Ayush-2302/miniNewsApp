import React, { useEffect, useState } from "react";
import About from "./About";

function Cust() {
 const [data]=About("https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001")
    return(
     <>
     { data &&
        data.map((ele,ind)=>
            (<>
            <div className="flex space-x-4">
            <p key={ind}> {ele.firstName}</p>
            <p key={ind}> {ele.lastName}</p>
            </div>
            </>
        ))


     }
     
     

     </>
     );
}

export default Cust;
