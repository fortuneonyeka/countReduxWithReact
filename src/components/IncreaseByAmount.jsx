import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset, incrementByAmount } from "../redux/slice/CounterSlice";

const IncreaseByAmount = () => {
  const increaseByAmount = useSelector((state) => state.counter.addByAmount);
  const dispatch = useDispatch();

  const [incrByAmount, setIncrByAmount] = useState(0);
  const addValue = Number(incrByAmount) || 0;

  const handleChange = (e) => {
    setIncrByAmount(e.target.value);
  };

  const handleReset = () => {
    setIncrByAmount(0);
    dispatch(reset());
  };
  const handleAdd = (e) => {
    dispatch(incrementByAmount(addValue));
  };
  return (
    <div>
      <p>{increaseByAmount}</p>

      <input type="text" value={incrByAmount} onChange={handleChange} />
      <div>
        <button className="btn" onClick={handleAdd}>
          Add Amount
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default IncreaseByAmount;
