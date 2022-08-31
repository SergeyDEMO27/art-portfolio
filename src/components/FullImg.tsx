import React from "react";
import { IGalleryImg } from "../types/types";
import "../styles/fullImg.scss";

interface FullImgProps {
  activeImg: IGalleryImg;
}

const FullImg: React.FC<FullImgProps> = ({ activeImg }) => {
  return (
    <div className='fullimg'>
      <img
        className='fullimg__image'
        src={activeImg.path}
        alt={activeImg.title}
      />
    </div>
  );
};

export default FullImg;
