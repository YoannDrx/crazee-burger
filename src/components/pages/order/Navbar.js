import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
    return (
        <NavbarStyled className="navbar">
            <div className="leftSide">Left</div>
            <div className="rightSide">
                Right
                <h1>Bonjour {username}</h1>
                <Link to={"/"}>
                    <button>Déconnexion</button>
                </Link>
            </div>
        </NavbarStyled>
    );
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;

    .leftSide {
        background: pink;
    }

    .rightSide {
        background: purple;
    }
`;
