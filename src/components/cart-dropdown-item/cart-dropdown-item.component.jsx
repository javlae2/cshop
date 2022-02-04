import React from "react";
import "./cart-dropdown-item.styles.scss";

const CartDropdownItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="cart-dropdown-item">
    <img className="image" alt="item" src={imageUrl} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartDropdownItem;
