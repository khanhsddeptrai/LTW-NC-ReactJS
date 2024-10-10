import { createBrowserRouter } from "react-router-dom";

import App from './App';
import Login from "./views/login/Login";
import Hello from "./views/hello/Hello";
import Car from "./views/cars/Car";

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

])