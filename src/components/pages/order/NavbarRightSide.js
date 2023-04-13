import styled from 'styled-components';
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
    return (
        <NabarRightSideStyled className="rightSide">
            {/* <div className="admin-button">Admin button</div> */}
            <Profile username={username}/>
        </NabarRightSideStyled>
    );
}

const NabarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 50px;
    
    /* .admin-button {
        background: lightblue;
    } */

    .profile {
        background: yellow;
    }
`;
