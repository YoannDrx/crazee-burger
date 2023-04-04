import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import styled from "styled-components";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function LoginForm() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        navigate(`/order/${inputValue}`);
    };

    const handlechange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <TextInput value={inputValue} onChange={handlechange} placeholder={"Entrez votre prénom"} required Icon={<BsPersonCircle className="icon" />} />

            <PrimaryButton Icon={<IoChevronForward className="icon"/>} label={"Acceder à mon espace"}/>
        </LoginFormStyled>
    );
}

const LoginFormStyled = styled.form`
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

    .icon {
        margin-left: 10px;
        font-size: 20px;
        vertical-align: middle;
    }
`;
