import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
import { theme } from "../../../../theme";
import { FaUserSecret, FaBars } from "react-icons/fa";
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";

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
        <ToastAdmin/>
      <div className="admin-button">
        <ToggleButton isChecked={isAdminMode} onToggle={handleAdminToggle} labelIfChecked={"DÉSACTIVER LE MODE ADMIN"} labelIfUnchecked={"ACTIVER LE MODE ADMIN"}/>
      </div>
      <div className="profile">
        <Profile username={username} />
      </div>
      <FaBars className="menu-icon" onClick={handleModalToggle} />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <Profile username={username} />
            <div className="toggle">
              <ToggleButton isChecked={isAdminMode} onToggle={handleAdminToggle} />
            </div>
            <button onClick={handleModalToggle} className="btn-close">
              Fermer
            </button>
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

  .menu-icon {
    display: none;
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    .menu-icon {
      display: block;
      margin: 0;
    }

    .admin-button,
    .profile {
      display: none;
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
}

.modal-content {
background-color: white;
border: 3px solid ${theme.colors.primary};
border-radius: 5px;
padding: 30px;
max-width: 400px;
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
}

.btn-close {
background-color: #ccc;
border: none;
color: white;
padding: 8px 16px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 20px 0;
cursor: pointer;
border-radius: 5px;
}

.btn-close:hover {
background-color: ${theme.colors.primary};
}

.toggle{
    margin-top: 20px;
}
`;


