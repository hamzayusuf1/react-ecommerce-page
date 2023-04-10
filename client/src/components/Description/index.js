import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useCartContext } from "../../contexts/CartContext";

import "./index.css";

const Description = () => {
  // const { count, setCount } = useContext(ShopContext);
  const { setOrderNum, prodName, setShowCart, count, setCount } =
    useCartContext();

  const handleDecrement = () => {
    count > 0 ? setCount(count - 1) : setCount(count);
  };

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("increase");
  };

  const handleCheckout = () => {
    if (count > 0) {
      setOrderNum(count);
      setShowCart(true);
    }
  };

  return (
    <div className="allText">
      <h2>{prodName}</h2>
      <p>Stylish design my H.tailors</p>
      <h3>$125.00</h3>
      <p>
        These high quality, affordable suits come in various colours to satisfy
        the tastes of many.
      </p>
      <div className="prices">
        <p>50%</p>
      </div>
      <p className="exPrice">$250.00</p>
      <div className="btns">
        <div className="quantityBtn">
          <AiOutlineMinus
            color="black"
            style={{ cursor: "pointer" }}
            onClick={handleDecrement}
          />
          <p>{count}</p>
          <AiOutlinePlus
            color="black"
            style={{ cursor: "pointer" }}
            onClick={handleIncrement}
          />
        </div>

        {/* <div className="addBtn" onClick={addToCart}>
          <AiOutlineShoppingCart />
          <p>Add to cart</p>
        </div> */}
        <button onClick={handleCheckout}>Add to cart </button>
      </div>
    </div>
  );
};

export default Description;
