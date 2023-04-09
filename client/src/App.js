import React, { useState, createContext, useEffect } from "react";

import Description from "./components/Description";
import Gallery from "./components/Gallery";
import NavLinks from "./components/NavLinks";
import "./App.css";
import Modal from "./components/Modal";
import { CartContextProvider } from "./contexts/CartContext";
import Hamburger from "./components/Hamburger";

export const ShopContext = createContext();

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  const [openModal, setOpenModal] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const [links, setLinks] = useState([
    "Collections",
    "Men",
    "Women",
    "About",
    "Contact",
  ]);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  return (
    <CartContextProvider>
      <ShopContext.Provider
        value={{
          currentIndex,
          setCurrentIndex,
          width,
          openModal,
          setOpenModal,
          openMenu,
          setOpenMenu,
          links,
          setLinks,
        }}
      >
        <div className="all">
          <Modal />
          <Hamburger />

          <div className="app">
            <div className="nav">
              <NavLinks />
            </div>
            <div className="mainDiv">
              <Gallery />
              <Description />
            </div>
          </div>
        </div>
      </ShopContext.Provider>
    </CartContextProvider>
  );
}

export default App;
