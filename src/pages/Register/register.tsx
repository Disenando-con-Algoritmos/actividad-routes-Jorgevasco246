import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { TextField, Button } from "@mui/material"; 

export default function Register() {
  const formRef = useRef(null);
  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formResponse = formRef.current;
    if (formResponse) {
      const formData = new FormData(formResponse);

      const username = formData.get("username") as string;
      const completeName = formData.get("complete-name") as string;
      

      localStorage.setItem("username", username);
      localStorage.setItem("complete-name", completeName);

    
      nav("/login");
    }
  };

  return (
    <div id="register-page" className="flex flex-col items-center min-h-screen text-white">
      <h1>Crear Cuenta</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4">
        <TextField label="Username" variant="outlined" name="username"/>
        <TextField label="Complete name" variant="outlined"name="complete-name"/>
        <TextField type="password" label="Password"variant="outlined"name="password"/>
        <Button type="submit" variant="outlined" >
          Register
        </Button>
      </form>
    </div>
  );
}
