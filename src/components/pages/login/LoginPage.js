import LoginForm from "./LoginForm";
import styled from "styled-components";

export default function LoginPage() {
    return (
        <LoginPageStyled>
            <LoginForm />
        </LoginPageStyled>
    );
}

const LoginPageStyled = styled.div`
    height: 100vh;
    width: 100vw;
    border: 3px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    ::before {
    content: "";
    background: url("/images/burger-background.jpg") rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

`;
