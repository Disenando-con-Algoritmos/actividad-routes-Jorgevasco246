import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router";

export default function Login() {
    const formRef = useRef(null);
    const nav = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formResponse = formRef.current;
        if (formResponse) {
            const formData = new FormData(formResponse);
            localStorage.setItem("username", formData.get("username") as string);

            nav("/Feed");
        }
    };

    return (
        <div id="login-page" className="flex flex-col items-center min-h-screen text-white">
            <h1>Iniciar Sesión!</h1>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 ">
                <TextField label="Username" variant="outlined" name="username"/>
                <TextField type="password" label="Password" variant="outlined" name="password"/>
                <Button type="submit" variant="outlined">
                    Iniciar sesión
                </Button>
            </form>
        </div>
    );
}