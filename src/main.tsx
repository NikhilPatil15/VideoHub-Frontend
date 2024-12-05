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
import AppLayout from "./layouts/AppLayout.tsx";
import NoSidebarLayout from "./layouts/NoSideBarLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import './App.css'

const router = createBrowserRouter(
  createRoutesFromChildren([
    <Route element={<NoSidebarLayout />}>
      <Route path="/login" />
      <Route path="/register"/>
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
