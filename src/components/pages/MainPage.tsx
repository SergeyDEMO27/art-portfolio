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
      id: "Horse1",
      title: "Horse",
      path: "./assets/images/content/main-content-1.jpg",
    },
    {
      id: "Moon1",
      title: "Moon",
      path: "./assets/images/content/main-content-2.jpg",
    },
    {
      id: "FarCry1",
      title: "Far Cry",
      path: "./assets/images/content/main-content-3.jpg",
    },
    {
      id: "Flat1",
      title: "Flat",
      path: "./assets/images/content/main-content-4.jpg",
    },
    {
      id: "Lady1",
      title: "Lady",
      path: "./assets/images/content/main-content-5.jpg",
    },
    {
      id: "TrafficLight1",
      title: "Traffic light",
      path: "./assets/images/content/main-content-6.jpg",
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

  const showPrevImg = () => {
    const newActiveIndex =
      activeImgIndex - 1 < 0 ? images.length - 1 : activeImgIndex - 1;
    setActiveImgIndex(newActiveIndex);
  };

  const showNextImg = () => {
    const newActiveIndex =
      activeImgIndex + 1 > images.length - 1 ? 0 : activeImgIndex + 1;
    setActiveImgIndex(newActiveIndex);
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

      <CSSTransition in={isImgShown} timeout={200} classNames='alert'>
        <MainModal isActive={isImgShown} hideImg={hideImg}>
          <MainSlider showPrevImg={showPrevImg} showNextImg={showNextImg}>
            <FullImg activeImg={images[activeImgIndex]} />
          </MainSlider>
        </MainModal>
      </CSSTransition>
    </div>
  );
};

export default MainPage;
