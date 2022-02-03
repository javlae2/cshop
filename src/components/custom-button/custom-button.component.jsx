import React from "react";
import "./custtom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  isInverted,
  ...otherProps
}) => (
  <button
    className={`${isInverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
