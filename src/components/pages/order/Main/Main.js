import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./MainRightSide/Menu";
import Admin from "./MainRightSide/Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
    const { isModeAdmin, setModeAdmin } = useContext(OrderContext);

    return (
        <MainStyled className="main">
            <div className="basket">Basket</div>
            <div className="menu-admin">
                <Menu />
                {isModeAdmin && <Admin />}
            </div>
        </MainStyled>
    );
}

const MainStyled = styled.div`
    border: 3px solid green;
    background: ${theme.colors.background_white};
    flex: 1;
    height: calc(95vh - 10vh);
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    display: grid;
    grid-template-columns: 25% 1fr;

    .basket {
        background: pink;
    }

    .menu-admin {
        position: relative;
        overflow-y: hidden;
        display: grid;
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
    }
`;
