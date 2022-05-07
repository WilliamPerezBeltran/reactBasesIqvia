import React from "react";
import { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = ({ getDoble }) => {
  console.log("contador Padre");
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");
  const suma = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  const resta = useCallback(() => {
    setContador(contador - 1);
  }, [contador]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>contador Padre</h2>
      <h2>contador Padre</h2>
      <a
        href="https://es.reactjs.org/docs/react-api.html#reactmemo"
        target="_blank rel=noreferer"
      >
        documentacion memo
      </a>
      <button onClick={resta}>-</button>
      <button onClick={suma}>+</button>
      <p>{contador}</p>
      <input type="text" onChange={handleInput} value={input} />
      <ContadorHijo contador={contador} suma={suma} resta={resta} />
    </div>
  );
};

export default Contador;

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
