import React from "react";

import { Container } from "./styles";

const Sidebox: React.FC = () => {
  return (
    <Container>
      <div className="profile-link">
        <div className="profile">
          <img
            src="https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91794116_3549054978498301_4637153121498300416_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_ohc=TKU9Sdb_Jj0AX9E5G_5&oh=c7528d93649a0fa51a885a7745b6b128&oe=5F60B500"
            alt="profile"
          />
        </div>
        <div className="profile-info">
          <span>isaq13_</span>
          <p>Isaac Alencar</p>
        </div>
      </div>
      <div className="sugest-box">
        <div className="titles">
          <span>Sugestões para você</span>
          <p>Ver tudo</p>
        </div>
        <article className="suggest-profiles">
          <div className="suggested-profile">
            <img
              src="https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91794116_3549054978498301_4637153121498300416_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_ohc=TKU9Sdb_Jj0AX9E5G_5&oh=c7528d93649a0fa51a885a7745b6b128&oe=5F60B500"
              alt=""
            />
          </div>
          <div className="info">
            <span>username</span>
            <p>seguido por fuano_13 + 3 pessoas</p>
          </div>
          <div className="action">
            <p>Seguir</p>
          </div>
        </article>
        <article className="suggest-profiles">
          <div className="suggested-profile">
            <img
              src="https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91794116_3549054978498301_4637153121498300416_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_ohc=TKU9Sdb_Jj0AX9E5G_5&oh=c7528d93649a0fa51a885a7745b6b128&oe=5F60B500"
              alt=""
            />
          </div>
          <div className="info">
            <span>username</span>
            <p>seguido por fuano_13 + 3 pessoas</p>
          </div>
          <div className="action">
            <p>Seguir</p>
          </div>
        </article>
        <article className="suggest-profiles">
          <div className="suggested-profile">
            <img
              src="https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91794116_3549054978498301_4637153121498300416_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_ohc=TKU9Sdb_Jj0AX9E5G_5&oh=c7528d93649a0fa51a885a7745b6b128&oe=5F60B500"
              alt=""
            />
          </div>
          <div className="info">
            <span>username</span>
            <p>seguido por fuano_13 + 3 pessoas</p>
          </div>
          <div className="action">
            <p>Seguir</p>
          </div>
        </article>
      </div>
      <footer>
        <div className="index">
          Sobre <span>&#183;</span> Ajuda <span>&#183;</span> Imprensa
          <span>&#183;</span> API
          <span>&#183;</span> Carreiras <span>&#183;</span> Privacidade
          <span>&#183;</span> Termos <span></span>
          Localizações <span>&#183;</span> Contas<span>&#183;</span> mais
          <span>&#183;</span> relevantes <span>&#183;</span> Hashtags
          <span>&#183;</span> Idioma
          <span>&#183;</span> Português (Brasil)`
        </div>
        <p>
          <span>&copy;</span> 2020 Isaac Alencar
        </p>
      </footer>
    </Container>
  );
};

export default Sidebox;
