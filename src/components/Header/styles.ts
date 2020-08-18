import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  background-color: var(--color-header-background);
  border-bottom: 1px solid var(--color-outline-border);
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 1.2rem auto;
  max-width: 90vw;

  > img {
    width: 100px;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;

  height: 28px;
  width: 214px;

  border: 1px solid var(--color-outline-border);
  border-radius: 0.3rem;
  background-color: var(--color-background);
  svg {
    margin-right: 0.9rem;
    height: 1.2rem;
    width: 1.6rem;
    color: var(--color-text-in-light);
  }
  span {
    font: 400 1.4rem "Roboto";
    color: var(--color-text-in-light);
  }
`;
export const NavLinks = styled.div`
  display: flex;
  svg {
    height: 2.6rem;
    width: 2.6rem;
    margin-right: 2rem;
    color: var(--color-fill-icons);
  }
`;
export const ProfileImage = styled.div`
  height: 2.9rem;
  width: 2.9rem;
  border-radius: 50%;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;
