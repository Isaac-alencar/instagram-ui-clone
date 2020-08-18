import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto 2.4rem;

  width: 614px;
  height: 860px;

  border: 1px solid var(--color-outline-border);
  background-color: var(--color-header-background);

  @media (min-width: 1000px) {
    margin: 0.2rem 18rem 5rem 18rem;
  }
  @media (max-width: 425px) {
    width: 100%;
    height: 580px;
    border: none;
    margin: 0;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem;

  .header {
    display: flex;
    align-items: center;
    > img {
      margin-right: 1.6rem;
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 50%;
    }
    strong {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
    }
  }
  > svg {
    width: 2rem;
  }
`;
export const Picture = styled.div`
  img {
    height: 600px;
    width: 100%;
    object-fit: fill;
    @media (max-width: 425px) {
      height: 320px;
    }
  }
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  > svg {
    margin: 0.8rem;
    width: 2.6rem;
    height: 2.6rem;
  }
  .post-actions {
    svg {
      margin: 0.8rem;
      width: 2.6rem;
      height: 2.6rem;
    }
  }
`;
export const PublishInfo = styled.div`
  .likes-info {
    display: flex;
    align-items: center;
    padding: 0 0.8rem;

    > img {
      margin-right: 0.8rem;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
    }
    p {
      font: 400 1.2rem "Roboto";
      span {
        font-weight: bold;
      }
    }
  }
  .picture-legend {
    margin: 0.8rem;
    p {
      font: 400 1.4rem "Roboto";
    }
  }
`;
export const Comments = styled.div`
  padding: 0.8rem;
  p {
    font: 400 1.2rem "Roboto";
  }
  border-bottom: 1px solid var(--color-outline-border);
  @media (max-width: 425px) {
    border-bottom: none;
  }
`;

export const AddComment = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 95%;
  input {
    margin-right: 0.8rem;
    width: 100%;
    border: 0;
    &::placeholder {
      font: 400 1.4rem "Roboto";
    }
    &:focus:not(:placeholder-shown) + button {
      color: var(--color-backround-button);
    }
  }
  button {
    border: 0;
    padding: 0.8rem 1.6rem;
    font: 700 1.4rem "Roboto";
    background-color: transparent;
    color: var(--color-backround-button-in-light);
  }
  @media (max-width: 425px) {
    display: none;
  }
`;
