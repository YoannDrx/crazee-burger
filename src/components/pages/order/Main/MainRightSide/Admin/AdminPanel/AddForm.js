import React, { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";

export default function AddForm() {
    const { handleAdd } = useContext(OrderContext);

    const [title, setTitle] = useState("");
    const [imageSource, setImageSource] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        // const newProduct = { id, product };

        const newProduct = {
            id: new Date().getTime(),
            title:  title ,
            imageSource:  imageSource ,
            price:  price ,
        };

        handleAdd(newProduct);
        setTitle("");
        setImageSource("");
        setPrice(0);
        
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImageChange = (e) => {
        setImageSource(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">image-preview</div>
            <div className="input-fields">
                <input value={title} onChange={handleTitleChange} type="text" placeholder="nom"></input>
                <input value={imageSource} type="text" onChange={handleImageChange} placeholder="imageURL" />
                <input value={price ? price : ""} type="text" onChange={handlePriceChange} placeholder="price" />
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
