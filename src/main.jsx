import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/Home";
import Product from "./components/Product/Product";
import Body from "./components/Body/Body";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./components/Loader/cartProductLoader";
import SignUp from "./components/SignUp/SignUp";
import ContextProviders from "./components/providers/ContextProviders";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/routes/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "order",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "manage-inventory",
        element: (
          <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProviders>
      <RouterProvider router={router} />
    </ContextProviders>
  </React.StrictMode>
);
