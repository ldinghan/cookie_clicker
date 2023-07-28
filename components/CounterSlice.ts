import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action:PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action:PayloadAction<number>) => {
        state.value -= action.payload
    },
    setPoints: (state, action:PayloadAction<number>) => {
      state.value = action.payload
    }
  },
})

export const { incrementByAmount, decrementByAmount, setPoints } = counterSlice.actions

export default counterSlice.reducer