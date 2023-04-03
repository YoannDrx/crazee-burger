import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
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
            <hr />
            <h2>Connectez-vous</h2>
            <div className="inputContainer">
                <BsPersonCircle className="icon"/>
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
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Amatic SC", cursive, sans-serif;
    border-radius: 5px;

    hr {
        width: 95%;
        border: 1.5px solid #f56a2c;
        margin-bottom: 40px;
    }

    h1 {
        color: white;
        font-size: 48px;
    }

    h2 {
        color: white;
        font-size: 36px;
        margin: 20px 10px 10px;
    }

    .inputContainer {
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin: 18px 0;
        padding: 18px 24px;
        white-space: nowrap;
        width: 100%;
    }

    .icon{
        color: #93a2b1;
        margin: 0 8px;
        font-size: 15px;
        min-width: 1em;
    }

    input{
        border: none;
        font-size: 15px;
        width: 100%;
        display: flex;
        color: #17161a;
    }

    &::placeholder {
        backgorund: white;
        color: lightgrey;
    }
`;
