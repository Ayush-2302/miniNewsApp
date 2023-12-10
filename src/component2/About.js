import React, { useContext, useEffect, useState } from 'react'
// import { mob } from './Home'
function About(url) {
  // const abo=useContext(mob)


  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const call = await fetch(  url  );

      const res = await call.json();
      setData(res);
    };
    getData();
  }, []);
  
  return [data]
}

export default About