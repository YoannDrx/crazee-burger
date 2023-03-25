import { useState } from "react";

export function LoginPage() {
    const [prenom, setPrenom] = useState("");

    const handlechange = (e) => {
        const newValue = e.target.value;
        setPrenom(newValue);
    };

    const handleSubmit = () => {
        alert(prenom)
        setPrenom("")
    }

    return (
        <div>
            <h1>Bienvenue chez nous</h1>
            <p>Connectez-vous</p>
            <form onSubmit={handleSubmit}>
                <input value={prenom} onChange={(e) => handlechange(e)} type="text" placeholder="Entrez votre prénom" required />
                <p>Please fill this field</p>
                <button>Accéder à votre espace</button>
            </form>
        </div>
    );
}
