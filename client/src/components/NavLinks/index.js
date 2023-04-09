import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

import { useCartContext } from "../../contexts/CartContext";
import Cart from "../Cart";
import Profile from "../../assets/profile.png";
import { ShopContext } from "../../App";

import "./index.css";

const NavLinks = () => {
  const { orderNum, showCart, setShowCart } = useCartContext();
  const { setOpenMenu, links } = useContext(ShopContext);

  // const handleClick = useEffect(() => {
  //   setShowCart(true);
  // }, []);

  return (
    <>
      <div className="navContainer">
        <div className="links">
          <GiHamburgerMenu
            size={25}
            className="hamburger"
            onClick={() => {
              setOpenMenu(true);
            }}
          />

          <h1 className="logo">H.tailors</h1>

          <div className="links">
            {links.map((link) => (
              <p key={link}>{link}</p>
            ))}
          </div>
        </div>

        <div className="profileCart">
          <div className="icon-and-cart">
            <div className="checkout">
              <AiOutlineShoppingCart
                size={25}
                onClick={() => {
                  setShowCart(!showCart);
                }}
              />
              <span>{orderNum}</span>
            </div>
            <Cart />
          </div>
          <CiBookmark size={25} />
          <img className="profilePic" src={Profile} />
        </div>
      </div>
    </>
  );
};

export default NavLinks;
