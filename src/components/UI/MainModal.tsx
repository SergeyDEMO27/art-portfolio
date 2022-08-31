import React from "react";
import classNames from "classnames";
import CloseButton from "./buttons/CloseButton";
import "../../styles/UI/mainModal.scss";

interface MainModalProps {
  isActive: boolean;
  hideImg: React.MouseEventHandler;
  children: React.ReactNode;
}

const MainModal: React.FC<MainModalProps> = ({
  isActive,
  hideImg,
  children,
}) => {
  const modalClasses = classNames("main-modal", {
    "main-modal--active": isActive,
  });

  return (
    <div className={modalClasses} onClick={hideImg}>
      <div className='main-modal__wrapper' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <div className='main-modal__close'>
        <CloseButton />
      </div>
    </div>
  );
};

export default MainModal;
