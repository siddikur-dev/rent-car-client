import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Register from "../../Component/AuthRegLogin/Register/Register";
import Login from "../../Component/AuthRegLogin/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Feature from "../../Pages/Feature/Feature";
import ResetPass from "../../Component/AuthRegLogin/ResetPass/ResetPass";
import About from "../../Pages/About/About";
import AddCar from "../../Pages/Cars/AddCar/AddCar";
import CarCard from "../../Component/CarCard/CarCard";
import AllCars from "../../Component/AllCars/AllCars";
import CarDetails from "../../Pages/CarDetails/CarDetails";
import UpdateCar from "../../Pages/UpdateCar/UpdateCar";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-car",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "/cars/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/cars/${params.id}`),
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-car/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/cars/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateCar />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-cars",
        loader: () => fetch("http://localhost:3000/cars"),
        Component: AllCars,
      },
      {
        path: "/register",
        Component: Register,
      },

      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/reset-password",
        Component: ResetPass,
      },
      {
        path: "/feature",
        element: (
          <PrivateRoute>
            <Feature />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
