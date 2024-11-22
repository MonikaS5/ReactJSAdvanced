import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./redux/counterSlice";

const ReduxState = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Redux State Management</h2>
      <h4>Count: {count}</h4>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
};

export default ReduxState;
