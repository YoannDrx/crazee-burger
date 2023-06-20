import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

export default function HintMessage() {
    return (
        <HintMessageStyled>
            <span>Cliquer sur un porduit pour le modifier</span>
            <HiCursorClick />
        </HintMessageStyled>
    );
}

const HintMessageStyled = styled.div`
    display: flex;
    align-items: center;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyBlue};
    position: relative;
    top: 50px;

    span {
        margin-right: 10px;
    }
`;
