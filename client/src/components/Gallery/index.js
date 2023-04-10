import React, { useContext } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import "./index.css";
import { ShopContext } from "../../App";

const Gallery = () => {
  const { currentIndex, setCurrentIndex, width, openModal, setOpenModal } =
    useContext(ShopContext);

  const isMobile = width <= 800;

  // /images/image-product-1.jpeg

  const imgs = [
    { id: 0, url: "/images/image-suit1-nobg.png" },
    { id: 1, url: "/images/image-suit2-nobg.png" },
    { id: 2, url: "/images/image-suit3-nobg.png" },
    { id: 3, url: "/images/image-suit4-nobg.png" },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleClick = (e) => {
  //   const path = e.target.src.split("/").slice(-2).join("/");
  //   console.log(path);
  //   setImgUrl(path);
  // };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? imgs.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const newIndex = currentIndex === imgs.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.timeLog(currentIndex);
  };

  const handleClick = (idx) => {
    setCurrentIndex(idx);
    console.log(currentIndex);
  };

  return (
    <>
      <div className={openModal ? "dark-image" : "gallery"}>
        <div className="mainImage">
          {isMobile && (
            <button onClick={goToPrev} className="leftArrow">
              <BiLeftArrow size={30} />
            </button>
          )}

          <div className="imgParent" alt="main-image">
            <img
              className={"center-image"}
              src={imgs[currentIndex].url}
              alt="main-image"
              onClick={() => {
                if (!isMobile) {
                  setOpenModal(!openModal);
                }
              }}
            />
          </div>
          {isMobile && (
            <button onClick={goToNext} className="rightArrow">
              <BiRightArrow size={30} />
            </button>
          )}
        </div>

        <div className="images">
          {imgs.map((info, idx) => (
            <img
              alt="smaller-images"
              className={imgs[currentIndex].id === idx ? "clicked" : ""}
              key={info.id}
              src={info.url}
              onClick={() => {
                handleClick(idx);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
