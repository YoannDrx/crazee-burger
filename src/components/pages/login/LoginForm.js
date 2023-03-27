import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [username, setusername] = useState("");
    const navigate = useNavigate();


    const handlechange = (e) => {
        const newValue = e.target.value;
        setusername(newValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setusername("");
        navigate(`/order/${username}`);
    };

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input value={username} onChange={(e) => handlechange(e)} type="text" placeholder="Entrez votre prénom" required />
            <p>Please fill this field</p>
                <button>Accéder à votre espace</button>
        </form>
    );
}
