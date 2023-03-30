import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {theme} from "../../../theme"


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
        <FormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <Input value={username} onChange={(e) => handlechange(e)} type="text" placeholder="Entrez votre prénom" required />
            <div>
                <Button>Accéder à votre espace</Button>
            </div>{" "}
        </FormStyled>
    );
}

// Style Components

const FormStyled = styled.form`
border: 1px solid red;
text-align: center;
`
const Input = styled.input`
width: 400px;
height: 55px;
`;

const Button = styled.button`
width: 400px;
height: 55px;
margin: 0;
padding: 0;
`;
