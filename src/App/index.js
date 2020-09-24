import React from "react";

import Container from "Components/Container";
import Header from "Components/Header";
import MiniHeader from "Components/MiniHeader";
import LeftColumn from "Components/LeftColumn";
import RightColumn from "Components/RightColumn";

import "reset.scss";
import "./style.scss";

const App = () => {
  return (
    <div className="app-content">
      <Header />
      <MiniHeader />

      <Container options={{ classes: ["app-body"] }}>
        <LeftColumn />
        <RightColumn />
      </Container>
    </div>
  );
};

export default App;
