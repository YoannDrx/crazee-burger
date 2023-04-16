import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon, onClick, className }) {
    return (
        <TabStyled onClick={onClick} className={className}>
            <div className="icon">{Icon}</div>
        </TabStyled>
    );
}

const TabStyled = styled.button`
    background: ${theme.colors.white};
    height: 43px;
    padding: 0 22px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    left: 5%;
    top: 1px;

    // fonts
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};

    //border
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};

    //border-radius
    border-radius: ${theme.borderRadius.round};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    :hover {
        border-bottom: 2px solid ${theme.colors.white};
    }

    .icon{
        display: flex;
    }
`;
