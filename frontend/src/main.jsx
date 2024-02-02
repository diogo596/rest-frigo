import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import RegisterLogin from "./pages/RegisterLogin";
import Fridge from "./pages/Fridge";
import Recettes from "./pages/Recettes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <RegisterLogin />,
      },
      {
        path: "/fridge",
        element: <Fridge />,
      },
      {
        path: "/recettes",
        element: <Recettes />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Utilisez la méthode render pour déclencher le rendu de votre application
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
