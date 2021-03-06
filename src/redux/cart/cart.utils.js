export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToClear
    )
}

export const reduceItemQuantity = (cartItems, cartItemtoReduce) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemtoReduce.id
    )

    if(existingCartItem.quantity === 1){
        return clearItemFromCart(cartItems, cartItemtoReduce.id);
    }

    
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemtoReduce.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
    
}
