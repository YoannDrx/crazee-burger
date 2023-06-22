import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deeplClone } from "../../../utils/array";

export default function OrderPage() {
    // state
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");
    const [menu, setMenu] = useState(fakeMenu.MEDIUM);
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
    const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

    // comportements
    const handleAdd = (newProduct) => {
        // 1. copie du tableau
        const menuCopy = deeplClone(menu);

        // 2. manip de la copie du tableau
        const menuUpdated = [newProduct, ...menuCopy];

        // 3. update du state
        setMenu(menuUpdated);
    };

    const handleDelete = (idOfProductToDelete) => {
        //1. copy du state
        const menuCopy = deeplClone(menu);

        //2. manip de la copie state
        const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete);

        //3. update du state
        setMenu(menuUpdated);
    };

    const handleEdit = (productBeingEdited) => {
        // 1. copie du tableau
        const menuCopy = deeplClone(menu);

        // 2. manip de la copie du tableau
        const indexofProductBeingEdited = menuCopy.findIndex((product) => product.id === productBeingEdited.id);

        menuCopy[indexofProductBeingEdited] = productBeingEdited;

        // 3. update du state
        setMenu(menuCopy);
    };

    const resetMenu = () => {
        setMenu(fakeMenu.MEDIUM);
    };

    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        menu,
        handleAdd,
        handleDelete,
        resetMenu,
        newProduct,
        setNewProduct,
        productSelected,
        setProductSelected,
        handleEdit,
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
