import { Navigate, useRoutes } from "react-router-dom";

import Dashboard from "../layouts/dashboard";
import Index from "../layouts/index";
import { Login } from "../pages/auth/login";
import { Register } from "../pages/auth/register";
import NotFound from "../pages/error/404";

import Home from "../pages/home";
import Product from "../pages/products";
import User from "../pages/users";

const Router = () => {
  return useRoutes([
    {
      path: "/home",
      element: <Dashboard />,
      children: [
        { index: true, element: <Home /> },
        { path: "users", element: <User /> },
        { path: "products", element: <Product /> },
      ],
    },
    {
      path: "/",
      element: <Index />,
      children: [
        { index: true, element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "not-found", element: <NotFound /> },
      ],
    },
    { path: "*", element: <Navigate to="/not-found" replace={true} /> },
  ]);
};

export default Router;
