import styled from "styled-components";

export const CartDropdownItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartDropdownItemImage = styled.img`
  width: 30%;
`;

export const CartDropdownItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  .name {
    font-size: 16px;
  }
`;
