import { StrictMode } from "react";
import { createRoot } from "react-dom/client";;
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import {AppLayout,NoSidebarLayout } from './layouts/index.ts'
import {HomePage,LoginPage,ResgiterPage} from './pages/index.ts'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromChildren([
    <Route element={<NoSidebarLayout />}>
      <Route path="/login"  element={<LoginPage/>}/>
      <Route path="/register" element={<ResgiterPage/>}/>
    </Route>,
    <Route element={<AppLayout />}>
      <Route path="/" element={<HomePage/>}/>
    </Route>,
  ])
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
