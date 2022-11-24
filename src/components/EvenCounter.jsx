import React from "react";
import { evenIncrement, evenDecrement } from "../redux/slice/CounterSlice";
import { useSelector, useDispatch } from "react-redux";

const EvenCounter = () => {
  const evenCount = useSelector((state) => state.counter.evenCount);
  const dispatch = useDispatch();

  const evenIncreaseCounter = () => {
    dispatch(evenIncrement());
  };

  const evenDecreaseCounter = () => {
    dispatch(evenDecrement());
  };

  return (
    <div>
      <h2>Even Counter :: {evenCount} </h2>

      <button
        style={{ margin: 10, padding: 5, fontSize: 20 }}
        onClick={evenIncreaseCounter}
      >
        +
      </button>
      <button
        style={{ margin: 10, padding: 5, fontSize: 20 }}
        onClick={evenDecreaseCounter}
      >
        -
      </button>
    </div>
  );
};

export default EvenCounter;
