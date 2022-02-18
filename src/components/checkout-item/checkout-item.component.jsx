import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  reduceItemQuantity,
  addItem,
} from "../../redux/cart/cart.actions";
import {
  Arrow,
  CheckoutItemContainer,
  CheckoutItemRemoveButton,
  CheckoutItemTextContainer,
  ImageContainer,
  QuantityContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, reduceItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <CheckoutItemTextContainer>{name}</CheckoutItemTextContainer>
      <QuantityContainer>
        <Arrow onClick={() => reduceItem(cartItem)}>&#10094;</Arrow>
        <span className="value">{quantity}</span>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QuantityContainer>
      <CheckoutItemTextContainer>${price}</CheckoutItemTextContainer>
      <CheckoutItemRemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  reduceItem: (item) => dispatch(reduceItemQuantity(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
