import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const multiplierSlice = createSlice({
  name: 'multiplier',
  initialState: {
    value: 1,
  },
  reducers: {
    incrementByAmount: (state, action:PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action:PayloadAction<number>) => {
        state.value -= action.payload
    },
  },
})

export const { incrementByAmount, decrementByAmount } = multiplierSlice.actions

export default multiplierSlice.reducer