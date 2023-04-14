import { useState } from "react";
import styled from "styled-components";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";

export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2);

    return (
        <MenuStyled className="menu">
            {menu.map((produit, index) => {
                return (
                    <div className="produit" key={index}>
                        <div className="image">
                            <img src={produit.imageSource} alt="" />
                        </div>
                        <div className="info-text">
                            <div className="title">{produit.title}</div>
                            <div className="price">{produit.price}</div>
                            <button className="add-button">Ajouter</button>
                        </div>
                    </div>
                );
            })}
        </MenuStyled>
    );
}

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    grid-column-gap: 10px;
    padding: 50px 50px 150px;
    justify-items: center;
`;
