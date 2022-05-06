import React from "react";
import { useCallback, useState, useEffect } from "react";

const MuestraDocle = ({ doblefunction }) => {
  // const [doble, setDoble] = useState(0)

  useEffect(() => {
    console.log("Renderiza hijo");
  });
  return <div>{doblefunction()}</div>;
};

const PracticeUseCallBack = () => {
  const [cont, setCont] = useState(1);
  const [mensage, setMessage] = useState("");

  const increment = () => {
    setCont(cont + 1);
  };

  const addMessage = (e) => {
    setMessage(e.target.value);
  };

  const getDoble = useCallback(() => {
    return cont * 2;
  }, [cont]);

  return (
    <div className="App">
      <div>usecalback</div>
      <p>{cont}</p>
      <MuestraDocle doblefunction={getDoble} />

      <button onClick={increment}>incremento</button>
      <input type="text" onChange={(e) => addMessage(e)} />
      {/*<input type="text" onChange={(e)=>setMessage(e.target.value)} />*/}
      <p>{mensage}</p>
    </div>
  );
};

export default PracticeUseCallBack;
