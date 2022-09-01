import React from "react";
import SliderButton from "./buttons/SliderButton";
import "../../styles/UI/mainSlider.scss";

interface MainSliderProps {
  slides: Array<any>;
  activeIndx: number;
  setActiveIndx: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
}

const MainSlider: React.FC<MainSliderProps> = ({
  slides,
  activeIndx,
  setActiveIndx,
  children,
}) => {
  const showPrevImg = () => {
    const newActiveIndex =
      activeIndx - 1 < 0 ? slides.length - 1 : activeIndx - 1;
    setActiveIndx(newActiveIndex);
  };

  const showNextImg = () => {
    const newActiveIndex =
      activeIndx + 1 > slides.length - 1 ? 0 : activeIndx + 1;
    setActiveIndx(newActiveIndex);
  };

  return (
    <div className='main-slider'>
      <div
        onClick={showPrevImg}
        className='main-slider__button main-slider__button--prev'
      >
        <SliderButton />
      </div>
      <div className='main-slider__content'>{children}</div>
      <div
        onClick={showNextImg}
        className='main-slider__button main-slider__button--next'
      >
        <SliderButton />
      </div>
    </div>
  );
};

export default MainSlider;
