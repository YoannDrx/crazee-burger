import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { theme } from "../../../theme";
import styled from "styled-components";

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
        <LoginFormStyled onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <div>
                <FaUserCircle />
                <input value={username} onChange={(e) => handlechange(e)} type="text" placeholder="Entrez votre prénom" required />
            </div>
            <div>
                <button>Accéder à votre espace</button>
            </div>
        </LoginFormStyled>
    );
}

const LoginFormStyled = styled.div`
    background: green;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
