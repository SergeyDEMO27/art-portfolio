import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import MainGallery from "../MainGallery";
import FullImg from "../FullImg";
import MainSlider from "../UI/MainSlider";
import MainModal from "../UI/MainModal";
import { IGalleryImg } from "../../types/types";
import "../../styles/mainPage.scss";

const MainPage: React.FC = () => {
  const [images, setImages] = useState<IGalleryImg[]>([
    {
      id: "horse1",
      title: "Horse",
      path: "./assets/images/content/main-content-1.jpg",
      type: "landscape",
      price: 1000,
    },
    {
      id: "moon1",
      title: "Moon",
      path: "./assets/images/content/main-content-2.jpg",
      type: "character",
      price: 1200,
    },
    {
      id: "farCry1",
      title: "Far Cry",
      path: "./assets/images/content/main-content-3.jpg",
      type: "landscape",
      price: 2000,
    },
    {
      id: "flat1",
      title: "Flat",
      path: "./assets/images/content/main-content-4.jpg",
      type: "landscape",
      price: 1500,
    },
    {
      id: "lady1",
      title: "Lady",
      path: "./assets/images/content/main-content-5.jpg",
      type: "character",
      price: 2500,
    },
    {
      id: "trafficLight1",
      title: "Traffic light",
      path: "./assets/images/content/main-content-6.jpg",
      type: "landscape",
      price: 3000,
    },
  ]);
  const [isImgShown, setIsImgShown] = useState<boolean>(false);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);

  const showImg = (image: IGalleryImg): void => {
    const newActiveIndex = images.findIndex(
      (element) => element.id === image.id
    );
    setActiveImgIndex(newActiveIndex);
    setIsImgShown(true);
  };

  const hideImg = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsImgShown(false);
  };

  return (
    <div className='main-page'>
      <MainHeader />
      <main className='main-page__main'>
        <MainGallery images={images} showImg={showImg} />
      </main>
      <MainFooter />

      <MainModal isActive={isImgShown} hideImg={hideImg}>
        <MainSlider
          slides={images}
          activeIndx={activeImgIndex}
          setActiveIndx={setActiveImgIndex}
        >
          <FullImg activeImg={images[activeImgIndex]} />
        </MainSlider>
      </MainModal>
    </div>
  );
};

export default MainPage;
