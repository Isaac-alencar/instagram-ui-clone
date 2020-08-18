import React from "react";

import {
  HomeIcon,
  SearchIcon,
  PlusSquareIcon,
  HeartIcon,
} from "../../assets/icons";

import { Container, StackNavigation } from "./styles";

const BottomNavigation: React.FC = () => {
  return (
    <Container>
      <StackNavigation>
        <HomeIcon />
        <SearchIcon />
        <PlusSquareIcon />
        <HeartIcon />
        <img
          src="https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91794116_3549054978498301_4637153121498300416_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_ohc=TKU9Sdb_Jj0AX9E5G_5&oh=c7528d93649a0fa51a885a7745b6b128&oe=5F60B500"
          alt="profile"
        />
      </StackNavigation>
    </Container>
  );
};

export default BottomNavigation;
