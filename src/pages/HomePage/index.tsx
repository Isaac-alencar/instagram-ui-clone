import React from "react";

import Header from "../../components/Header";
import Stories from "../../components/Stories";
import Publishes from "../../components/Publishes";

import showImg from "../../assets/images/show.jpg";
import dogImg from "../../assets/images/dog.jpg";
import Sing from "../../assets/images/sing.jpg";

import { Container } from "./styles";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Stories />
        <Publishes url_image={showImg} legend="Show do John Mayer" />
        <Publishes url_image={dogImg} legend="Dog muito lindo, meu pai" />
        <Publishes url_image={Sing} legend="So far away" />
      </Container>
    </>
  );
};

export default HomePage;
