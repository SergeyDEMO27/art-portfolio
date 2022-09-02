import React, { useState } from "react";
import { useSortedSearchedImages } from "../../hooks/useImages";
import { CSSTransition } from "react-transition-group";
import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import MainGallery from "../MainGallery";
import MainFilter from "../MainFilter";
import FullImg from "../FullImg";
import MainSlider from "../UI/MainSlider";
import MainModal from "../UI/MainModal";
import { IGalleryImg, IFilter } from "../../types/types";
import "../../styles/charactersPage.scss";

const CharactersPage: React.FC = () => {
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
    {
      id: "cart1",
      title: "Cart",
      path: "./assets/images/content/main-content-7.jpg",
      type: "landscape",
      price: 3500,
    },
    {
      id: "winterHouses1",
      title: "Winter Houses",
      path: "./assets/images/content/main-content-8.jpg",
      type: "landscape",
      price: 4000,
    },
    {
      id: "persona1",
      title: "Persona 5",
      path: "./assets/images/content/main-content-9.jpg",
      type: "character",
      price: 2200,
    },
    {
      id: "tiger1",
      title: "Tiger",
      path: "./assets/images/content/main-content-10.jpg",
      type: "character",
      price: 2900,
    },
    {
      id: "matthewMcConaughey1",
      title: "Matthew McConaughey",
      path: "./assets/images/content/main-content-11.jpg",
      type: "character",
      price: 3100,
    },
    {
      id: "horses1",
      title: "Horses",
      path: "./assets/images/content/main-content-12.jpg",
      type: "landscape",
      price: 1700,
    },
  ]);
  const [filter, setFilter] = useState<IFilter>({
    selectedOpt: "",
    searchVal: "",
  });
  const [isImgShown, setIsImgShown] = useState<boolean>(false);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);

  const filteredSearchedImages = useSortedSearchedImages(
    images,
    filter.selectedOpt,
    filter.searchVal
  );

  const showImg = (image: IGalleryImg): void => {
    const newActiveIndex = filteredSearchedImages.findIndex(
      (element) => element.id === image.id
    );
    setActiveImgIndex(newActiveIndex);
    setIsImgShown(true);
  };

  const hideImg = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsImgShown(false);
  };

  return (
    <div className='characters-page'>
      <MainHeader />
      <main className='characters-page__main'>
        <div className='characters-page__wrapper'>
          <MainFilter filter={filter} setFilter={setFilter} />
          {filteredSearchedImages.length ? (
            <MainGallery
              images={filteredSearchedImages}
              showImg={showImg}
              isFilter={true}
            />
          ) : (
            <h2 style={{ color: "red" }}>Nothing was found by your request</h2>
          )}
        </div>
      </main>
      <MainFooter />

      <MainModal isActive={isImgShown} hideImg={hideImg}>
        <MainSlider
          slides={filteredSearchedImages}
          activeIndx={activeImgIndex}
          setActiveIndx={setActiveImgIndex}
        >
          {isImgShown && filteredSearchedImages.length && (
            <FullImg activeImg={filteredSearchedImages[activeImgIndex]} />
          )}
        </MainSlider>
      </MainModal>
    </div>
  );
};

export default CharactersPage;
