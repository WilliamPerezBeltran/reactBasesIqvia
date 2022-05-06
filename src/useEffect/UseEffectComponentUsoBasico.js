import React from "react";
import { useState, useEffect } from "react";

const UseEffectComponentUsoBasico = () => {
  const [mensaje, setMensaje] = useState("");
  const [dobles, setDobles] = useState(1);

  // el useEffect se ejecuta despues del render
  useEffect(() => {
    // console.log('Se le pasa una funcion anonima despues de cada renderizado')
    // console.log('Se ejecuta el useEffect')
    console.log("El mensaje es " + mensaje);
  }, [mensaje]);

  useEffect(() => {
    console.log("El valor de doble es " + dobles);
  }, [dobles]);

  const handleClick = () => {
    setDobles((dobles) => dobles * 2);
  };

  console.log("Render");
  return (
    <div className="App">
      <h2>hook useEffect</h2>
      <div>
        <p>{mensaje}</p>
        <input
          type="text"
          onChange={(e) => {
            setMensaje(e.target.value);
          }}
        />
      </div>
      <div>
        <p>{dobles}</p>
        <button onClick={handleClick}>multiplica</button>
      </div>
    </div>
  );
};

export default UseEffectComponentUsoBasico;
