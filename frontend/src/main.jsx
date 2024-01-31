import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import RegisterLogin from "./pages/RegisterLogin";
import Fridge from "./pages/Fridge";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Utilisez la méthode render pour déclencher le rendu de votre application
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
