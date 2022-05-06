import React from "react";
import { useState, useCallback } from "react";
import axios from "axios";
import { debounce } from "lodash";
// import { debounce } from "lodash";
import UseCallbackComponent from "./useCallback/Main";
import UseEffectComponent from "./useEffect/UseEffectComponentUsoBasico";
import DescargarDatos from "./useEffect/DescargarDatos";
import TeclasWindow from "./useEffect/TeclasWindow";
import PracticeUseCallBack from "./practice/PracticeUseCallBack";
import Contador from "./useMemo/Contador";
import MainProblemUseContext from "./useContext/MainProblem";
import MainSolutionUseContext from "./useContext/MainSolution";
import ProTypesAndDefaultProps from "./proTypesAndDefaultProps/App";
import Autocomplete from "./Autocomplete";

const App = () => {
  return (
    <div className="App">
      {/*<UseCallbackComponent />*/}
      {/*<UseEffectComponent />*/}
      {/*<DescargarDatos />*/}
      {/*<TeclasWindow />*/}
      {/*<PracticeUseCallBack />*/}
      {/*<Contador />*/}
      {/*<MainProblemUseContext />*/}
      {/*<MainSolutionUseContext />*/}
      {/*<ProTypesAndDefaultProps />*/}
      <Autocomplete />
    </div>
  );
};

export default App;
