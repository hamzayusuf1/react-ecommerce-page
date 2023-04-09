import React, { useContext } from "react";

import "./index.css";
import { ShopContext } from "../../App";

const imgs = [
  { id: 0, url: "/images/image-suit1.jpg" },
  { id: 1, url: "/images/image-suit2.jpg" },
  { id: 2, url: "/images/image-suit3.jpg" },
  { id: 3, url: "/images/image-suit4.jpg" },
];

const Modal = () => {
  const { currentIndex, setCurrentIndex, setOpenModal, openModal } =
    useContext(ShopContext);

  const handleClick = (idx) => {
    setCurrentIndex(idx);
    console.log(currentIndex);
  };

  if (!openModal) return null;
  return (
    <div
      className="modalBackground"
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="xDiv"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <p className="xBtn">X</p>
        </div>
        <div className="imgContainer">
          <div>
            <img className="middle-image" src={imgs[currentIndex].url} />
          </div>
          <div className="allImages">
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
      </div>
    </div>
  );
};

export default Modal;
