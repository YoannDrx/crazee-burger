import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import { theme } from "../../../../theme";
import { FaUserSecret, FaBars } from "react-icons/fa";
import { useState } from "react";
import "daisyui/dist/full.css";

export default function NavbarRightSide({ username }) {
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

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
            <div className="profile">
                <Profile username={username} />
            </div>
            <FaBars className="menu-icon" onClick={handleModalToggle} />

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <div className="flex flex-col items-center justify-center">
                                <Profile username={username} />
                                <div className="mt-4">
                                    <ToggleButton isChecked={isAdminMode} onToggle={handleAdminToggle} />
                                </div>
                            </div>
                            <div className="modal-action mt-4">
                                <button onClick={handleModalToggle} className="btn btn-secondary">
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </NavbarRightSideStyled>
    );
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    .admin-button {
        margin-right: 50px;
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

    .menu-icon {
        display: none;
        font-size: 1.5rem;
    }

    @media (max-width: 767px) {
        .menu-icon {
            display: block;
        }

        .admin-button,
        .profile {
            display: none;
        }
    }
`;
