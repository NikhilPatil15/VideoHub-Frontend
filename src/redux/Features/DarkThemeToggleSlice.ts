import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface DArkThemeState {
  dark: boolean;
}

const initialState: DArkThemeState = {
  dark: false,
};

const DarkThemeToggleSlice = createSlice({
  name: "DarkThemeToggleSlice",
  initialState,
  reducers: {
    setDarkTheme: (state, action:PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
  },
});

export const { setDarkTheme } = DarkThemeToggleSlice.actions;
export default DarkThemeToggleSlice.reducer;
