import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  work: false,
  workout: false,
  meditate: false,
  volunteer: false,
  party: false,
  shower: false,
};

export const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    enable: (state, type) => {
      state[type.payload] = false;
    },
    disable: (state, type) => {
      state[type.payload] = true;
    },
  },
});

export const { enable, disable } = buttonSlice.actions;
export default buttonSlice.reducer;
