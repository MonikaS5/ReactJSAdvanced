import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count > 0 ? state.count - 1 : 0 };

    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>-UseReducerHook-</h2>
      <h3> Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREASE" })}>INCREASE</button>

      <button onClick={() => dispatch({ type: "DECREASE" })}>DECREASE</button>
    </div>
  );
};

export default UseReducerHook;
