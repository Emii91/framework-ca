import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import "./Cart.css";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartState, dispatch } = useCart();

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const handleCheckout = () => {
    dispatch({ type: "CLEAR_CART" });
    navigate("/checkout");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartState.items.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          {cartState.items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img className="cart-img" src={item.imageUrl} alt={item.name} />
              <p>{item.title}</p>
              <p>Price: ${item.price}</p>

              <button className="remove" onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <hr className="cart-line" />
            <p>Total Items: {cartState.items.length}</p>
            <p>Total Price: ${cartState.totalPrice}</p>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
