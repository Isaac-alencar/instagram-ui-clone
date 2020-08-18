import React from "react";

import { Storie } from "./styles";

export interface StoriesProps {
  id?: number;
  name: string;
  profile_picture: string;
}

const Stories: React.FC<StoriesProps> = ({ profile_picture, name }) => {
  return (
    <Storie>
      <div className="storie-view">
        <img
          src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/s320x320/83318227_608147753078476_1701566206160404480_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_ohc=kdZEHudonPIAX8Epkab&oh=366f33d2d63eb3b752094a47f7f598e1&oe=5F62D73D"
          alt="profile on storie"
        />
      </div>
      <span>{name}</span>
    </Storie>
  );
};

export default Stories;
