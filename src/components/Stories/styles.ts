import styled from "styled-components";

export const Storie = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.6rem;
  span {
    margin-left: 0.3rem;
    font: 400 1rem "Roboto";
    color: var(--color-text);
  }
  .storie-view {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0.4rem;
    height: 6.2rem;
    width: 6.2rem;
    border: 1px solid transparent;
    border-radius: 50%;
    background-image: radial-gradient(
      circle at top right,
      var(--color-sotries-gradient-primary),
      var(--color-sotries-gradient-secondary)
    );
    background-origin: border-box;
    background-clip: content-box, border-box;
    img {
      margin-top: 0.2rem;
      height: 5.6rem;
      width: 5.6rem;
      border: 2px solid #fff;
      border-radius: 50%;
    }
  }
`;
