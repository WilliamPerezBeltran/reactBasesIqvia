import React from "react";
// import { useState, useCallback } from "react";
// import axios from "axios";
// import { debounce } from "lodash";
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
import CreateCustomComponents from "./01_CreateCustomComponents/App";
import ManageStatewithHooks from "./02_ManageStatewithHooksuseState/App/App";
import ShareStatewithContext from "./04_ShareStateAcrossReactComponentswithContext//App";
import RoutingWithReactRouter from "./05_HandleRoutingWithReactRouter/App";
import MemoUseMemoUseCallback from "./06_memo-useMemo-useCallback/App";
import ReduxPractice from "./08_redux/App";

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
      {/*<Autocomplete />*/}
      {/*<CreateCustomComponents />*/}
      {/*<ManageStatewithHooks />*/}
      {/*<ManageStatewithReducerHooks />*/}
      {/*<ShareStatewithContext />*/}
      {/*<RoutingWithReactRouter />*/}
      {/*<MemoUseMemoUseCallback />*/}
      <ReduxPractice />
    </div>
  );
};

export default App;
