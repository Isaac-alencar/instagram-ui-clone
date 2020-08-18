import React from "react";

import logoImg from "../../assets/images/logo.svg";
import { CameraIcon, SendIcon } from "../../assets/icons";

import { Container, Content } from "./styles";

const Topbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <CameraIcon />
        <img src={logoImg} alt="" />
        <SendIcon />
      </Content>
    </Container>
  );
};

export default Topbar;
