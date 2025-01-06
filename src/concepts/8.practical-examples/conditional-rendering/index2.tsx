import React, { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState(0);

  const addItem = () => {
    setCartItems(cartItems + 1); // Add an item to the cart
  };

  return (
    <div>
      <h1>
        {cartItems === 0
          ? "Your cart is empty"
          : `You have ${cartItems} item(s) in your cart`}
      </h1>
      <button onClick={addItem}>Add item to cart</button>
    </div>
  );
}

export default Cart;
