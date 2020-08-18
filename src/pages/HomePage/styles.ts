import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "stories suggestions"
    "feed suggestions";
  grid-auto-columns: 80rem 1fr;
  grid-template-rows: 52px auto auto;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TimeLine = styled.div`
  grid-area: feed;

  @media (max-width: 1000px) {
    margin: 1rem;
  }
  @media (max-width: 425px) {
    margin: 0 auto;
  }
`;

export const StoriesTimeLine = styled.div`
  grid-area: stories;
  display: flex;

  margin: 3rem 18rem;

  width: 614px;
  height: 105px;

  border: 1px solid var(--color-outline-border);
  border-radius: 0.4rem;
  background-color: var(--color-header-background);

  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1000px) {
    margin: 8rem auto 2rem;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin: 5.5rem 0 0;
    border: none;
    background-color: var(--color-background);
  }
`;
