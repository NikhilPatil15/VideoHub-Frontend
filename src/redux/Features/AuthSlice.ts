import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: true,
  error: null,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setUser: (state, action:PayloadAction<AuthState["user"]>) => {
      state.user = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      (state.user = null), (state.loading = false);
    },
    setError: (state, action:PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setUser, clearUser, setError, setLoading } = AuthSlice.actions;

export default AuthSlice.reducer;
