import React, { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";

const EMPTY_PRODUCT = {
    id: "",
    title: "Nom du produit (ex : Super Burger)",
    imageSource: "Lien URL d'une image (ex : http://www.mon-produit.fr",
    price: 0,
};

export default function AddForm() {
    const { handleAdd } = useContext(OrderContext);
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
    const [isSubmited, setIsSbumited] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProductToAdd = {
            ...newProduct,
            id: new Date().getTime(),
        };

        handleAdd(newProductToAdd);
        setNewProduct(EMPTY_PRODUCT);
        displaySuccesMessage();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const displaySuccesMessage = () => {
        setIsSbumited(true);
        setTimeout(() => {
            setIsSbumited(false);
        }, 2000);
    };

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">{newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : <div>Aucune Image</div>}</div>
            <div className="input-fields">
                <input name="title" value={newProduct.title} onChange={handleChange} type="text" placeholder="Nom du produit (ex : Super Burger)"></input>
                <input name="imageSource" value={newProduct.imageSource} type="text" onChange={handleChange} placeholder="Lien URL d'une image (ex : http://www.mon-produit.fr" />
                <input name="price" value={newProduct.price ? newProduct.price : ""} type="text" onChange={handleChange} placeholder="prix" />
            </div>
            <div className="submit">
                <button className="submit-button">Submit button</button>
                {isSubmited && (
                    <div className="submit-message">
                        <span>
                            <FiCheck />
                            Ajouté avec succès !
                        </span>
                    </div>
                )}
            </div>
        </AddFormStyled>
    );
}

const AddFormStyled = styled.form`
    border: 3px solid red;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;

    .image-preview {
        background: red;
        grid-area: 1 / 1 / -2 / -2;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    .input-fields {
        background: blue;
        grid-area: 1 / 2 / -2 / -2;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
    }

    .submit {
        background: green;
        grid-area: 4 / 2 / -1 / -2;
        display: flex;
        align-items: center;

        .submit-button {
            width: 50%;
        }

        .submit-message {
            background: yellow;
        }
    }
`;
