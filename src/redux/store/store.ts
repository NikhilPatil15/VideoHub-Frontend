import { configureStore } from "@reduxjs/toolkit";
import ToggleReducer from '../Features/ToggleSlice'
import AuthReducer from '../Features/AuthSlice'
import DarkThemeReducer from '../Features/DarkThemeToggleSlice'

export const store = configureStore({
    reducer:{
        Toggle:ToggleReducer,
        DarkTheme:DarkThemeReducer,
        Auth:AuthReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
