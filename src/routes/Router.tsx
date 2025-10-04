import { createBrowserRouter } from "react-router";

import Landing from "../pages/Landing/landing";
import Register from "../pages/Register/register";
import Login from "../pages/Login/login";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Landing
    },
    {
        path: "Login",
        Component: Login  
    },
    {
        path: "Register",
        Component: Register
    },
    {
        path: "Catalog",
        Component: Catalog
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "Feed",
                element: <h1>Feed, esto es priv</h1>
            }
        ]
    },   
], {basename: "/dmi"});

export default router;