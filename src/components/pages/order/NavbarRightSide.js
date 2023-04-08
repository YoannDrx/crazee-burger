import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function NavbarRightSide({ username }) {
    return (
        <NabarRightSideStyled className="rightSide">
            Right
            <h1>Bonjour {username}</h1>
            <Link to={"/"}>
                <button>Déconnexion</button>
            </Link>
        </NabarRightSideStyled>
    );
}

const NabarRightSideStyled = styled.div`
    background: purple;
`;
