import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../redux/action/CountActions"
import { increment, decrement } from "../redux/slice/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch(increment());
  };

  const decreaseCounter = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Counter :: {count}</h2>

      <button
        style={{ margin: 10, padding: 5, fontSize: 20 }}
        onClick={increaseCounter}
      >
        +
      </button>
      <button
        style={{ margin: 10, padding: 5, fontSize: 20 }}
        onClick={decreaseCounter}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
