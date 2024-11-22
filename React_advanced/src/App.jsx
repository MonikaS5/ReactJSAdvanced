import "./App.css";
import ReduxState from "./components/ReduxState";
import UseReducerHook from "./components/UseReducerHook";
import ZustandState from "./components/ZustandState";

function App() {
  return (
    <>
      <UseReducerHook />
      <br />
      <ZustandState />
      <br />
      <ReduxState />
    </>
  );
}

export default App;
