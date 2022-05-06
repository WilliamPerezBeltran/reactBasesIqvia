import React from "react";
import { useState, useEffect } from "react";

const DescargarDatos = () => {
  const [personajes, sePersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character") //fetch devuelve una promesa
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        sePersonajes(json.results);
      });
  }, []);

  return (
    <div className="App">
      <h2>hook useEffect</h2>
      <ul>
        {personajes.map((personaje) => (
          <li>{personaje.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DescargarDatos;
