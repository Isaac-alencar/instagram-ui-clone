import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10rem 18rem 5rem 18rem;

  width: 614px;
  height: 105px;

  border: 1px solid var(--color-outline-border);
  border-radius: 0.4rem;
  background-color: var(--color-header-background);

  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Storie = styled.div`
  .storie-view {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 1.6rem;
    &:after {
      content: "";
      position: absolute;
      top: -4px;
      left: -4px;
      height: 6rem;
      width: 6rem;
      border: 2px solid transparent;
      border-radius: 50%;
      background-image: linear-gradient(white, white),
        radial-gradient(circle at top left, var(--color-sotries-gradient));
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
    img {
      z-index: 1;
      height: 5.6rem;
      width: 5.6rem;
      border-radius: 50%;
    }
    span {
      margin-top: 0.8rem;
      margin-left: 0.3rem;
      font: 400 1.2rem "Roboto";
      color: var(--color-text);
    }
  }
`;
