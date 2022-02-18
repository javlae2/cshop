import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  CollectionItemFooterContainer,
  BackgroundImage,
  AddToCartButton,
  CollectionItemNameContainier,
  CollectionItemPriceContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionItemFooterContainer>
        <CollectionItemNameContainier>{name}</CollectionItemNameContainier>
        <CollectionItemPriceContainer>${price}</CollectionItemPriceContainer>
      </CollectionItemFooterContainer>
      <AddToCartButton onClick={() => addItem(item)} isInverted>
        Add to cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
