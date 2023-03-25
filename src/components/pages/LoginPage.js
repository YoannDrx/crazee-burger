import { useState } from "react";

export function LoginPage() {
    const [inputValue, setInputValue] = useState("");

    const handlechange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };

    const handleSubmit = () => {
        alert(`Bonjour ${inputValue}`)
        setInputValue("")
    }

    return (
        <div>
            <h1>Bienvenue chez nous</h1>
            <br/>
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input value={inputValue} onChange={(e) => handlechange(e)} type="text" placeholder="Entrez votre prénom" required />
                <p>Please fill this field</p>
                <button>Accéder à votre espace</button>
            </form>
        </div>
    );
}
