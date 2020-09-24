import React from "react";

import Container from "Components/Container";

import "./style.scss";

const Header = () => {
  return (
    <div id="header">
      <Container options={{ classes: ["header-inner"] }}>
        <div className="header-avatar" />

        <div className="header-text">
          <div className="header-title">Sara Borges</div>
          <div className="header-subtitle">Front end engineer</div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
