import React, { useState, useContext } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import "./index.css";
import { ShopContext } from "../../App";
import Modal from "../Modal";

const Gallery = () => {
  const { currentIndex, setCurrentIndex, width, openModal, setOpenModal } =
    useContext(ShopContext);

  const isMobile = width <= 800;

  // /images/image-product-1.jpeg

  const imgs = [
    { id: 0, url: "/images/image-suit1.jpg" },
    { id: 1, url: "/images/image-suit2.jpg" },
    { id: 2, url: "/images/image-suit3.jpg" },
    { id: 3, url: "/images/image-suit4.jpg" },
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);
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

          <div className="imgParent">
            <img
              className={"center-image"}
              src={imgs[currentIndex].url}
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
              className={imgs[currentIndex].id == idx ? "clicked" : ""}
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

{
  /* <img src={`/images/image-product-1.jpeg`} onClick={handleClick} />
        <img src={`/images/image-product-2.jpeg`} onClick={handleClick} />
        <img src={`/images/image-product-3.jpeg`} onClick={handleClick} />
        <img src={`/images/image-product-4.jpeg`} onClick={handleClick} /> */
}

export default Gallery;
