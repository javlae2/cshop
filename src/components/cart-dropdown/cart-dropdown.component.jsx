import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropdownContainer,
  CartDropdownItemsContainer,
  EmptyCartMessageContainer,
  GoToCheckoutButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartDropdownItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartDropdownItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyCartMessageContainer>
          Your cart is empty
        </EmptyCartMessageContainer>
      )}
    </CartDropdownItemsContainer>
    <GoToCheckoutButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </GoToCheckoutButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
