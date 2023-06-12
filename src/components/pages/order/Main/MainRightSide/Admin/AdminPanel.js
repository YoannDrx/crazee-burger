import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { getTabSelected, tabsConfig } from "./tabsConfig";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { hover } from "@testing-library/user-event/dist/hover";

export default function AdminPanel() {
    const { currentTabSelected } = useContext(OrderContext);
    const [imageUrl, setImageUrl] = useState("");

    const tabs = tabsConfig;
    const tabSelected = getTabSelected(tabs, currentTabSelected);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };

    const adminInput = {
        padding: "10px",
        background: `${theme.colors.background_white}`,
    };

    const buttonStyles = {
        backgroundColor: `${theme.colors.success}`,
        width: "300px",
    };

    return (
        <AdminPanelStyled className="adminPanel">
            {/* <p>{tabSelected && tabSelected.label}</p> */}
            <div className="imageContainer">{imageUrl.trim() !== "" ? <img src={imageUrl} alt="" /> : <p>Aucune image</p>}</div>
            <form onSubmit={handleSubmit}>
                <TextInput Icon={<FaHamburger className="icon" />} placeholder="Nom du produit (ex: Super Burger)" style={adminInput} />
                <TextInput Icon={<BsFillCameraFill className="icon" />} placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png" style={adminInput} />
                <TextInput Icon={<MdOutlineEuro className="icon" />} placeholder="Prix" style={adminInput} />
                <PrimaryButton id="customButton" type="submit" label="Ajouter un nouveau produit" style={buttonStyles} />
            </form>
        </AdminPanelStyled>
    );
}

const AdminPanelStyled = styled.div`
    height: 250px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    border: 3px solid blue;
    display: grid;
    grid-template-columns: 300px 3fr;
    align-items: center;

    .imageContainer {
        width: 250px;
        height: 150px;
        border: 3px solid ${theme.colors.greyLight};
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column: 1 / 2;
    }

    form {
        border: 3px solid green;
        grid-column: 2 / 4; // S'assurer que le formulaire prend 3fr
    }

    img {
        border: 3px solid red;
        width: 100%;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.size.SM};
        margin-left: 10px;
        color: ${theme.colors.greyDark};
    }
`;
