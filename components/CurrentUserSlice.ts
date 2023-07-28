import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    value: "",
  },
  reducers: {
    setUID: (state, action:PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
})

export const { setUID } = currentUserSlice.actions

export default currentUserSlice.reducer