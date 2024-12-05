import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface TogglerState {
  open: boolean;
}

const initialState: TogglerState = {
  open: true,
};

const ToggleSlice = createSlice({
  name: "ToggleSlice",
  initialState,
  reducers: {
    setToggle: (state, action:PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setToggle } = ToggleSlice.actions;

export default ToggleSlice.reducer;
