import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { IGalleryImg } from "../types/types";
import "../styles/mainGallery.scss";

interface MainGalleryProps {
  images: IGalleryImg[];
  showImg: (value: IGalleryImg) => void;
  isFilter?: boolean;
}

const MainGallery: React.FC<MainGalleryProps> = ({
  images,
  showImg,
  isFilter = false,
}) => {
  return (
    <section className='main-gallery'>
      <TransitionGroup className='main-gallery__list' component='ul'>
        {images.map((image) => {
          return (
            <CSSTransition key={image.title} timeout={200} classNames='alert'>
              <li onClick={() => showImg(image)} className='main-gallery__item'>
                <picture className='main-gallery__picture'>
                  <img
                    className='main-gallery__image'
                    src={image.path}
                    alt={image.title}
                  />
                </picture>
                {isFilter && (
                  <div className='main-gallery__item-title'>
                    {image.title}--{image.type}--{`${image.price}$`}
                  </div>
                )}
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
};

export default MainGallery;
