import styled from "styled-components";

export default function PrimaryButton({ label, Icon }) {
    return (
        <PrimaryButtonStyled className="buttonContainer">
            <span>{label}</span>
            {Icon && Icon}
        </PrimaryButtonStyled>
    );
}

const PrimaryButtonStyled = styled.button`
    background: #ff9f1b;
    border: 1px solid #ff9f1b;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-weight: 800;
    padding: 16px 24px;
    width: 100%;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;
    line-height: 1;

    &:hover:not(:disabled) {
        background: white;
        color: #ff9f1b;
        border: 1px solid #ff9f1b;
        transition: all 0.3s ease-in-out;
        /* transform: scale(1.05); */
    }
    &:active {
        color: white;
        background: #ff9f1b;
        border: 1px solid #ff9f1b;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
