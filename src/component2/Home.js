import React, { createContext, useState } from "react";
const mob = createContext();
function Home(props) {
  const [chalo, setChalo] = useState("oye chal nikal yha se");



  return(
  <>
   <mob.Provider value={[chalo]} >
    {props.children}
    </mob.Provider>
    </>
    )
}

export default Home;
export {mob}
