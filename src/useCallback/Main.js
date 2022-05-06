import React from "react";
import { useState, useCallback } from "react";
import MuestraDoble from "./MuestraDoble";

const Main = () => {
  const carName = "will";
  const [con, setCont] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const getDoble = useCallback(() => {
    return con * 2;
  }, [con]);

  return (
    <div className="App">
      <h1>uso de useCallback</h1>
      <p>{con}</p>
      <button onClick={() => setCont(con + 1)}>incremento</button>
      <MuestraDoble getDoble={getDoble}></MuestraDoble>
      <input type="text" onChange={(e) => setMensaje(e.target.value)} />
      <p>{mensaje}</p>
    </div>
  );
};

export default Main;
// import React from "react";
// import { useState,useCallback } from "react";
// import MuestraDoble from "./MuestraDoble";

// const Main = () => {
//   const carName = "will"
//   const [con,setCont] = useState(0)
//   const [mensaje,setMensaje] = useState('')

//   const getDoble = ()=>{
//     return con*2
//   }
//     return (
//       <div className="App">
//         <p>{con}</p>
//         <button onClick={()=>setCont(con+1)}>incremento</button>
//         <MuestraDoble getDoble={getDoble}></MuestraDoble>
//         <input type="text" onChange={(e)=>setMensaje(e.target.value)} />
//         <p>{mensaje}</p>
//       </div>
//     );
// };

// export default Main
