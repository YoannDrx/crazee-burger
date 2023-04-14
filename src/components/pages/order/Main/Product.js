import styled from "styled-components";

export default function Product({ index, imageSource, title, price }) {
    return (
        <ProductStyled className="produit" key={index}>
            <div className="image">
                <img src={imageSource} alt="" />
            </div>
            <div className="info-text">
                    <div className="title">{title}</div>
                <div className="description">
                    <div className="price">{price}</div>
                    <button className="add-button">Ajouter</button>
                </div>
            </div>
        </ProductStyled>
    );
}

const ProductStyled = styled.div`
    background: red;
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px 20px 10px 20px;

    .image {
        width: 100%;
        height: auto;
        margin-top: 30px;
        border: 3px solid yellow;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .description {
        border: 3px solid fuchsia;
    }
`;
