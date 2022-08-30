import React from "react";
import "../../styles/UI/mainModal.scss";

interface MainModalProps {
  hideImg: React.MouseEventHandler;
  children: React.ReactNode;
}

const MainModal: React.FC<MainModalProps> = ({ hideImg, children }) => {
  return (
    <div className='main-modal' onClick={hideImg}>
      <div className='main-modal__wrapper'>{children}</div>
    </div>
  );
};

export default MainModal;
