import React from "react";
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,

  increase: () => set((state) => ({ count: state.count + 1 })),

  decrease: () =>
    set((state) => ({ count: state.count ? state.count - 1 : 0 })),
}));

const ZustandState = () => {
  const { count, increase, decrease } = useStore();

  return (
    <div>
      <h2>----Zustand State Management Library----</h2>
      <h4>Count : {count}</h4>
      <button onClick={increase}>INCREASE</button>
      <button onClick={decrease}>DECREASE</button>
    </div>
  );
};

export default ZustandState;
