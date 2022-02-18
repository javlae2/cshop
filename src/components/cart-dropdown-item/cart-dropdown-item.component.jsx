import React from "react";
import {
  CartDropdownItemContainer,
  CartDropdownItemDetails,
  CartDropdownItemImage,
} from "./cart-dropdown-item.styles";

const CartDropdownItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartDropdownItemContainer>
    <CartDropdownItemImage alt="item" src={imageUrl} />
    <CartDropdownItemDetails>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </CartDropdownItemDetails>
  </CartDropdownItemContainer>
);

export default CartDropdownItem;
