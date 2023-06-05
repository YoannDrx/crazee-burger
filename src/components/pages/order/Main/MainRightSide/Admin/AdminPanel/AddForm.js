import React from "react";
import styled from "styled-components";

export default function AddForm() {
    return (
        <AddFormStyled>
            <div className="image-preview">image-preview</div>
            <div className="input-fields">
                <input type="text" placeholder="nom"></input>
                <input type="text" placeholder="imageURL" />
                <input type="text" placeholder="price" />
            </div>
            <button className="submit-button">
              Submit button
            </button>
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
