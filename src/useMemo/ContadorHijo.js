import React from "react";
import { memo, useMemo } from "react";

const ContadorHijo = ({ contador, suma, resta }) => {
  // let superNumero = 0
  // for (let i = 0; i < 1000000000; ++i) {
  // 	superNumero++
  // }
  // useCallback TRABAJA MEMORIZAR UNA FUNCION
  // USEMEMO MEMORIZA EL RESULTADO DE UNA FUNCION ES DECIR UN VALOR CALCULADO
  // let superNumero = 0

  // useMemo => es necesasrio retornar el valor que se va computar

  // useMemo =>  es memo retorn una "compute property"
  let superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 1000000000; ++i) {
      numero++;
    }
    return numero;
  }, []);

  console.log("contador hijo");
  return (
    <div>
      <h2>contador hijo</h2>
      <button onClick={resta}>-</button>
      <button onClick={suma}>+</button>
      <h3>{superNumero}</h3>
    </div>
  );
};

// export default ContadorHijo
export default memo(ContadorHijo);
