import styled from "styled-components";

export const Container = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 52px;
  background-color: var(--color-header-background);
  border-top: 1px solid var(--color-outline-border);
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const StackNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 90%;
  margin: 1rem auto;
  svg {
    height: 3rem;
    width: 3rem;
    color: var(--color-text);
  }
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
`;
