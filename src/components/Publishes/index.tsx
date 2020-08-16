import React from "react";

import {
  HeartIcon,
  SendIcon,
  MessageCircleIcon,
  BookmarkIcon,
  MoreInfoIcon,
} from "../../assets/icons";

import {
  Container,
  ProfileInfo,
  Picture,
  Actions,
  PublishInfo,
  Comments,
  AddComment,
} from "./styles";

interface PublishesProps {
  url_image: string;
  legend?: string;
}

const Publishes: React.FC<PublishesProps> = ({ url_image, legend }) => {
  return (
    <Container>
      <ProfileInfo>
        <div className="header">
          <img
            src="https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91794116_3549054978498301_4637153121498300416_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_ohc=TKU9Sdb_Jj0AX9E5G_5&oh=c7528d93649a0fa51a885a7745b6b128&oe=5F60B500"
            alt="profile"
          />
          <strong>isaq13_</strong>
        </div>
        <MoreInfoIcon />
      </ProfileInfo>

      <Picture>
        <img src={url_image} alt="publish" />
      </Picture>
      <Actions>
        <div className="post-actions">
          <HeartIcon />
          <MessageCircleIcon />
          <SendIcon />
        </div>
        <BookmarkIcon />
      </Actions>
      <PublishInfo>
        <div className="likes-info">
          <img
            src="https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91794116_3549054978498301_4637153121498300416_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_ohc=TKU9Sdb_Jj0AX9E5G_5&oh=c7528d93649a0fa51a885a7745b6b128&oe=5F60B500"
            alt="profile-that-likes-post"
          />
          <p>
            Curtido por
            <span> danielksm</span> e <span>outras 188.781 pessoas</span>
          </p>
        </div>
        <div className="picture-legend">
          <p>
            <strong>isaq13_</strong> {legend}
          </p>
        </div>
      </PublishInfo>

      <Comments>
        <p>
          <strong>andresiniesta8</strong> Some comment
        </p>
        <p>
          <strong>andresiniesta8</strong> Some comment
        </p>
      </Comments>
      <AddComment>
        <input type="text" placeholder="Adicione um comentário" />
        <button>Publicar</button>
      </AddComment>
    </Container>
  );
};

export default Publishes;
