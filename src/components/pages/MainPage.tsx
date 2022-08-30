import React, { useState } from "react";
import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import MainGallery from "../MainGallery";
import MainModal from "../UI/MainModal";
import "../../styles/mainPage.scss";

const MainPage: React.FC = () => {
  const [isImgShown, setIsImgShown] = useState<boolean>(false);

  const showImg = (path: string): void => {
    setIsImgShown(true);
  };

  const hideImg = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsImgShown(false);
  };

  return (
    <div className='main-page'>
      <MainHeader />
      <main className='main-page__main'>
        <MainGallery showImg={showImg} />
      </main>
      <MainFooter />
      {isImgShown && (
        <MainModal hideImg={hideImg}>
          {
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ fontSize: "50px", color: "red", cursor: "pointer" }}
            >
              <h1>THIS IS PICTURE</h1>
            </div>
          }
        </MainModal>
      )}
    </div>
  );
};

export default MainPage;
