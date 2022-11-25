import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  evenCount: 2,
  addByAmount: 0
};

export const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    evenIncrement: (state) => {
      state.evenCount += 2;
    },
    evenDecrement: (state) => {
      state.evenCount -= 2;
    },
    incrementByAmount: (state, action) => {
      state.addByAmount  += action.payload
    },

    reset: (state) => {
      state.addByAmount = 0
    }
  },
});

export const { increment, decrement, evenIncrement, evenDecrement,reset,incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
