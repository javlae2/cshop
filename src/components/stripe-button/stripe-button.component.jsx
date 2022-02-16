import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KTmNCIvpYLIlIfW9m6dg4XNZwaK0KAFtwYgyZsVatfWhIT4JYUYBKlwfWQD5isEJSiQMgcuKxtFzI9FDGy7jF5j001C6V6pjc";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      bitcoin
      label="Pay Now"
      name="CShop S.A."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
