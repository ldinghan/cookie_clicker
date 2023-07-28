import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Upgrades {
  big:number;
  medium:number;
  small:number;
}
const upgradesSlice = createSlice({
  name: 'upgrades',
  initialState: {
    value: {
      big: 1,
      medium: 1,
      small: 1,
    },
  },
  reducers: {
    upgrade: (state, action:PayloadAction<keyof Upgrades>) => {
      state.value[action.payload] += 1;
    },
    setUpgrades: (state, action:PayloadAction<Upgrades>) => {
      state.value = action.payload
    }
  },
})

export const { upgrade, setUpgrades } = upgradesSlice.actions

export default upgradesSlice.reducer