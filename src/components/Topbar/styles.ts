import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  background-color: var(--color-header-background);
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  width: 90%;
  > img {
    width: 100px;
  }
  svg {
    height: 3rem;
    width: 3rem;
    color: var(--color-text);
  }
`;
