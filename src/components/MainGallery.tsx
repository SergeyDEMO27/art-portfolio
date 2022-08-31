import React from "react";
import { IGalleryImg } from "../types/types";
import "../styles/mainGallery.scss";

interface MainGalleryProps {
  images: IGalleryImg[];
  showImg: (value: IGalleryImg) => void;
}

const MainGallery: React.FC<MainGalleryProps> = ({ images, showImg }) => {
  return (
    <section className='main-gallery'>
      <ul className='main-gallery__list'>
        {images.length &&
          images.map((image) => {
            return (
              <li
                onClick={() => showImg(image)}
                key={image.title}
                className='main-gallery__item'
              >
                <picture className='main-gallery__picture'>
                  <img
                    className='main-gallery__image'
                    src={image.path}
                    alt={image.title}
                  />
                </picture>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default MainGallery;
