import React from "react";
import { withRouter } from "react-router-dom";
import { BackgroundImage, ContentContainer, MenuItemContainer } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    className={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage imageUrl={imageUrl} />
    <ContentContainer>
      <h2 className="title">{title.toUpperCase()}</h2>
      <span className="subtitle">SHOP NOW</span>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
