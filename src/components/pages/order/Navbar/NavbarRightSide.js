import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import { theme } from "../../../../theme";
import { FaUserSecret } from "react-icons/fa";
import { useState } from "react";

export default function NavbarRightSide({ username }) {
    const [isAdminMode, setIsAdminMode] = useState(false);

    const handleAdminToggle = () => {
        if (!isAdminMode) {
            notify();
        }
        setIsAdminMode(!isAdminMode);
    };

    const notify = () => {
        toast.info("Mode admin activé", {
            icon: <FaUserSecret size={30} />,
            theme: "dark",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <NavbarRightSideStyled className="right-side">
            <ToastContainer className="toaster" bodyClassName="body-toast" />
            <div className="admin-button">
                <ToggleButton isChecked={isAdminMode} onToggle={handleAdminToggle} />
            </div>
            <Profile username={username} />
        </NavbarRightSideStyled>
    );
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    .admin-button {
        margin-right: 20px;
    }

    .profile {
        background: yellow;
    }

    .toaster {
        max-width: 300px;
    }

    .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
        background: ${theme.colors.background_dark};
    }

    .body-toast {
        .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
            margin-right: 20px;
            margin-left: 5px;
        }
        div {
            line-height: 1.3em;
        }
    }
`;
