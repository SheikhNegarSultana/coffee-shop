import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Coffee from "../Pages/Coffee";
import CoffeeDetails from "../Pages/CoffeeDetails";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <p>Error</p>, // Error Component
        children : [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path: '/Dashboard',
                element : <Dashboard></Dashboard>
            },
            {
                path: '/Coffee',
                element : <Coffee></Coffee>
            },
            {
                path: '/CoffeeDetails',
                element : <CoffeeDetails></CoffeeDetails>
            },
        ]
    },

])

export default routes;