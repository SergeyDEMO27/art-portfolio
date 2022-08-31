import React from "react";
import SliderButton from "./buttons/SliderButton";
import "../../styles/UI/mainSlider.scss";

interface MainSliderProps {
  showPrevImg: () => void;
  showNextImg: () => void;
  children: React.ReactNode;
}

const MainSlider: React.FC<MainSliderProps> = ({
  showPrevImg,
  showNextImg,
  children,
}) => {
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
