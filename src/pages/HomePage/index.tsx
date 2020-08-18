import React, { useState, useEffect } from "react";

import api from "../../services/api";

import Header from "../../components/Header";
import Topbar from "../../components/Topbar";
import Stories, { StoriesProps } from "../../components/Stories";
import Publishes from "../../components/Publishes";
import Sidebox from "../../components/Sidebox";
import BottomNavigation from "../../components/BottomNavigation";

import showImg from "../../assets/images/show.jpg";
import dogImg from "../../assets/images/dog.jpg";
import Sing from "../../assets/images/sing.jpg";

import { Container, TimeLine, StoriesTimeLine } from "./styles";

const HomePage: React.FC = () => {
  const [stories, setStories] = useState([]);

  async function hangleLoadStories() {
    const response = await api.get("users");
    setStories(response.data);
  }

  useEffect(() => {
    hangleLoadStories();
  }, []);

  return (
    <Container>
      <Header />
      <Topbar />
      <StoriesTimeLine>
        {stories.map((storie: StoriesProps) => (
          <Stories
            key={storie.id}
            name={storie.name}
            profile_picture={storie.profile_picture}
          />
        ))}
      </StoriesTimeLine>
      <TimeLine>
        <Publishes url_image={showImg} legend="Show do John Mayer" />
        <Publishes url_image={dogImg} legend="Dog muito lindo, meu pai" />
        <Publishes url_image={Sing} legend="So far away" />
      </TimeLine>
      <Sidebox />
      <BottomNavigation />
    </Container>
  );
};

export default HomePage;
