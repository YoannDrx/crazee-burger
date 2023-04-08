import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function OrderPage(props) {
    const { username } = useParams();

    return (
        <OrderPageStyled>
            <di className="container">
                <h1>Bonjour {username}</h1>
                <Link to={"/"}>
                    <button>Déconnexion</button>
                </Link>
            </di>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    background: orange;
    height: 100vh;
    width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        background: red;
        height: 95vh;
    }
`;
