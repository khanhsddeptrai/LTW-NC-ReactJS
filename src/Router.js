import { createBrowserRouter } from "react-router-dom";

import App from './App';
import Login from "./components/login/Login";
import Hello from "./components/hello/Hello";
import Car from "./components/cars/Car";
import Information from './components/informations/Information';
import User from "./components/user/User";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/hello",
        element: <Hello />
    },
    {
        path: "/car",
        element: <Car />
    },
    {
        path: "/infor",
        element: <Information />
    },
    {
        path: "/user",
        element: <User />
    },
    {
        path: "*",
        element: "404 Not Found!"
    }

])