import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {createStructuredSelector} from 'reselect';
import { CartContainer, ItemCounter, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemsQuantity }) => (
  <CartContainer className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCounter>{itemsQuantity}</ItemCounter>
  </CartContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemsQuantity: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
