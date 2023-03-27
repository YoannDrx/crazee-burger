import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [inputValue, setInputValue] = useState("");

    const handlechange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };

    const handleSubmit = () => {
        alert(`Bonjour ${inputValue}`);
        setInputValue("");
    };

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input value={inputValue} onChange={(e) => handlechange(e)} type="text" placeholder="Entrez votre prénom" required />
            <p>Please fill this field</p>
            <Link to={"/order"}>
                <button>Accéder à votre espace</button>
            </Link>
        </form>
    );
}
