import React, { useContext } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";

import "./index.css";
import { ShopContext } from "../../App";
import { useCartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { orderNum, setOrderNum, showCart, setShowCart, prodName, setCount } =
    useCartContext();

  return (
    // <div className="cart">
    //   {showCart ? (
    //     <div className="cartDiv">
    //       <div className="cartHeader">
    //         <p>Cart</p>
    //         <AiOutlineClose onClick={closeCart} />
    //       </div>
    //       <div className="space-between">
    //         <div className="cartMain">
    //           <img src="images/image-product-1.jpeg" />
    //           <p>{`$125 x ${orderNum}`}</p>
    //           <span className="total">{`$${125 * orderNum}`}</span>
    //         </div>
    //         <div className="delIcon">
    //           <AiOutlineDelete size={25} />
    //         </div>
    //       </div>
    //       <div className="checkoutBtn">
    //         <p>Checkout</p>
    //       </div>
    //     </div>
    //   ) : (
    //     ""
    //   )}
    // </div>

    <div className="cart">
      {showCart ? (
        <div className="cartDiv">
          <div className="cartHeader">
            <h5>Cart</h5>
            <AiOutlineClose
              onClick={() => {
                setShowCart(false);
              }}
            />
          </div>
          {!orderNum ? (
            <div className="cardContent">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-between">
              <div className="cartMain">
                <img src="images/image-product-1.jpeg" />
                <div>
                  <p>{prodName}</p>
                  <p>
                    {`$125 x ${orderNum}`} <span>{`$${125 * orderNum}`}</span>
                  </p>
                </div>
              </div>
              <AiOutlineDelete
                size={25}
                onClick={() => {
                  setOrderNum(0);
                  setCount(0);
                }}
              />
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
{
  /* <div className="cardContent">
            <p>Your cart is empty</p>
          </div> */
}

export default Cart;
