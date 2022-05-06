import React from "react";
import { useState, useCallback, useEffect } from "react";

const MuestraDoble = ({ getDoble }) => {
  const [doble, setDoble] = useState(0);
  useEffect(() => {
    // setDoble(getDoble())
    console.log("Renderiza hijo");
  }, [getDoble]);
  return <h2>{getDoble()}</h2>;
};

export default MuestraDoble;

// import React from "react";
// import { useState,useCallback, useEffect } from "react";

// const MuestraDoble = ({getDoble})=>{
// 	const [doble, setDoble] = useState(0)
// 	useEffect(()=>{
// 		setDoble(getDoble())
// 		console.log("Renderiza hijo")
// 	})
// 	return <h2>{doble}</h2>
// }

// export default MuestraDoble
