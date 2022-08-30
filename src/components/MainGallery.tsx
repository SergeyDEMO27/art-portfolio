import React, { useState } from "react";
import { IGalleryImg } from "../types/types";
import "../styles/mainGallery.scss";

interface MainGalleryProps {
  showImg: (value: string) => void;
}

const MainGallery: React.FC<MainGalleryProps> = ({ showImg }) => {
  const [images, setImages] = useState<IGalleryImg[]>([
    { title: "Horse", path: "./assets/images/content/main-content-1.jpg" },
    { title: "Moon", path: "./assets/images/content/main-content-2.jpg" },
    { title: "Far Cry", path: "./assets/images/content/main-content-3.jpg" },
    { title: "Flat", path: "./assets/images/content/main-content-4.jpg" },
    { title: "Lady", path: "./assets/images/content/main-content-5.jpg" },
    {
      title: "Traffic light",
      path: "./assets/images/content/main-content-6.jpg",
    },
  ]);

  return (
    <section className='main-gallery'>
      <ul className='main-gallery__list'>
        {images.length &&
          images.map(({ title, path }) => {
            return (
              <li
                onClick={() => showImg(path)}
                key={title}
                className='main-gallery__item'
              >
                <picture className='main-gallery__picture'>
                  <img className='main-gallery__image' src={path} alt={title} />
                </picture>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default MainGallery;
