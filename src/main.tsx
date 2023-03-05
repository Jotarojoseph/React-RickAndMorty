import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import Home from "./pages/home";
import Root from "./routes/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

