import React from "react";

import profilePitureStorie from "../../assets/images/kobe.jpg";

import { Container, Storie } from "./styles";

// interface Stories {
//Here goes to define the stories props to set profile images and usernames
// }

const Stories: React.FC = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 9, 10];

  return (
    <Container>
      {stories.map((item) => (
        <Storie>
          <div className="storie-view">
            <img src={profilePitureStorie} alt="profile on storie" />
            <span>kingjames</span>
          </div>
        </Storie>
      ))}
    </Container>
  );
};

export default Stories;
