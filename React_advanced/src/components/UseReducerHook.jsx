import React, { useReducer } from "react";

const reducer = () => {};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h5>------UseReducerHook------</h5>
    </div>
  );
};

export default UseReducerHook;
