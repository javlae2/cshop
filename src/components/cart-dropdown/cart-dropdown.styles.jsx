import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartDropdownItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const GoToCheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyCartMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
