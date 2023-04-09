import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { ShopContext } from "../../App";
import "./index.css";

const Hamburger = () => {
  const { openMenu, setOpenMenu, links } = useContext(ShopContext);

  console.log(openMenu);

  if (!openMenu) return null;
  return (
    <div
      className="overlay"
      onClick={() => {
        setOpenMenu(false);
      }}
    >
      <div
        className="side-menu"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <AiOutlineClose size={25} style={{ fontWeight: 800 }} />
        </span>

        {links.map((link) => (
          <p key={link}>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default Hamburger;
