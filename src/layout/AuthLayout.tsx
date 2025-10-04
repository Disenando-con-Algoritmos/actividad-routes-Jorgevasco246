import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => { 
        const username = localStorage.getItem("username");
        if (username) {
            setIsAuthenticated(true);
        }else {
            setIsAuthenticated(false);
        }
        setIsLoading(false);
    }, []);

    return <div id="auth-layout">
        {
            isLoading ? <h1>Loading...</h1> : (
                isAuthenticated ? <Outlet /> : <Navigate to="/login" />
            )}
        {!isLoading && isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </div>;
}