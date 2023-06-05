import React, { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";

const emptyProduct = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
};

export default function AddForm() {
    const { handleAdd } = useContext(OrderContext);
    const [newProduct, setNewProduct] = useState(emptyProduct);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProductToAdd = {
            ...newProduct,
            id: new Date().getTime(),
        };

        handleAdd(newProductToAdd);
        setNewProduct(emptyProduct);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">image-preview</div>
            <div className="input-fields">
                <input name="title" value={newProduct.title} onChange={handleChange} type="text" placeholder="nom"></input>
                <input name="imageSource" value={newProduct.imageSource} type="text" onChange={handleChange} placeholder="imageURL" />
                <input name="price" value={newProduct.price ? newProduct.price : ""} type="text" onChange={handleChange} placeholder="price" />
            </div>
            <button className="submit-button">Submit button</button>
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
    }

    .input-fields {
        background: blue;
        grid-area: 1 / 2 / -2 / -2;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
    }

    .submit-button {
        background: green;
        grid-area: 4 / 2 / -1 / -2;
        display: grid;
        width: 50%;
    }
`;
