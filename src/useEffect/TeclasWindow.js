import React from "react";
import { useState, useEffect } from "react";

const TeclasWindow = () => {
  const [teclas, setTeclas] = useState([]);

  useEffect(() => {
    function onKeyPress(event) {
      console.log(event.keyCode);
      setTeclas([...teclas, event.keyCode]);
    }
    window.addEventListener("keypress", onKeyPress);

    return function cleanUp() {
      window.removeEventListener("keypress", onKeyPress);
    };
  });
  return (
    <div className="App">
      <h2>hook useEffect</h2>
      <ul>
        {teclas.map((tecla) => (
          <li>{tecla}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeclasWindow;
