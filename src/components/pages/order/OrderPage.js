import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
    // state
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");
    const [menu, setMenu] = useState(fakeMenu.LARGE);

    // comportements
    const handleAdd = (newProduct) => {
        const menuCopy = [...menu];
        const menuUpdated = [newProduct, ...menuCopy];
        setMenu(menuUpdated);
    };

    const handleDelete = (idOfProductToDelete) => {
        const menuCopy = [...menu];
        const menufiltered = menuCopy.filter((product) => product.id !== idOfProductToDelete);
        setMenu(menufiltered);
    };
    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        handleAdd,
        handleDelete,
        menu,
    };

    //affichage
    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled>
                <div className="container">
                    <Navbar />
                    <Main />
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
    );
}

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        background: red;
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
    }
`;
