import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import MainGallery from "../MainGallery";
import FullImg from "../FullImg";
import MainSlider from "../UI/MainSlider";
import MainModal from "../UI/MainModal";
import { IGalleryImg } from "../../types/types";
import "../../styles/charactersPage.scss";

const CharactersPage: React.FC = () => {
  const [images, setImages] = useState<IGalleryImg[]>([
    {
      id: "horse1",
      title: "Horse",
      path: "./assets/images/content/main-content-1.jpg",
      type: "landscape",
    },
    {
      id: "moon1",
      title: "Moon",
      path: "./assets/images/content/main-content-2.jpg",
      type: "character",
    },
    {
      id: "farCry1",
      title: "Far Cry",
      path: "./assets/images/content/main-content-3.jpg",
      type: "landscape",
    },
    {
      id: "flat1",
      title: "Flat",
      path: "./assets/images/content/main-content-4.jpg",
      type: "landscape",
    },
    {
      id: "lady1",
      title: "Lady",
      path: "./assets/images/content/main-content-5.jpg",
      type: "character",
    },
    {
      id: "trafficLight1",
      title: "Traffic light",
      path: "./assets/images/content/main-content-6.jpg",
      type: "landscape",
    },
    {
      id: "cart1",
      title: "Cart",
      path: "./assets/images/content/main-content-7.jpg",
      type: "landscape",
    },
    {
      id: "winterHouses1",
      title: "Winter Houses",
      path: "./assets/images/content/main-content-8.jpg",
      type: "landscape",
    },
    {
      id: "persona1",
      title: "Persona 5",
      path: "./assets/images/content/main-content-9.jpg",
      type: "character",
    },
    {
      id: "tiger1",
      title: "Tiger",
      path: "./assets/images/content/main-content-10.jpg",
      type: "character",
    },
    {
      id: "matthewMcConaughey1",
      title: "Matthew McConaughey",
      path: "./assets/images/content/main-content-11.jpg",
      type: "character",
    },
    {
      id: "horses1",
      title: "Horses",
      path: "./assets/images/content/main-content-12.jpg",
      type: "landscape",
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
    <div className='characters-page'>
      <MainHeader />
      <main className='characters-page__main'>
        <MainGallery images={images} showImg={showImg} isFilter={true} />
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

export default CharactersPage;
