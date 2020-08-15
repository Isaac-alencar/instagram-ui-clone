import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
:root {
  font-size: 60%;
  --color-backgrond: #fafafa;
  --color-outline-border: #e3e3e3;
  --color-fill-icons: #262626;
  --color-header-background: #fff;
  --color-sotries-gradient: #e30080, #ff6700, #ff9225;
  --color-text-in-light: #8e8e8e;
  --color-text: #262626;
  --color-notification: #ff003d;
  --color-backround-button: #007efa;
  --color-metions-comment: #062d70;
  --color-like-on: #d00000;
}
* {
  margin: 0;
  padding: 0;
  outline: 0;

  box-sizing: border-box;
}

html, body, #root {
  height: 100vh;
}
body: {
  background-color: var(--color-backgrond);
}
@media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

`;

export default Globalstyle;
