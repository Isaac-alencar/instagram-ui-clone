import styled from "styled-components";

export const Container = styled.div`
  grid-area: suggestions;
  width: 40rem;
  margin: 3rem 3rem 3rem 1rem;
  .profile-link {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 18rem;
    .profile {
      margin: 1rem 0;
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
        margin-left: 0.2rem;
        height: 5.6rem;
        width: 5.6rem;
        border: 2px solid #fff;
        border-radius: 50%;
      }
    }
    .profile-info {
      span {
        font: 700 1.6rem "Roboto";
        color: var(--color-text);
      }
      p {
        margin-top: 8px;
        font: 400 1.2rem "Roboto";
        color: var(--color-text-in-light);
      }
    }
  }
  .sugest-box {
    max-width: 30rem;
    .titles {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem;

      span {
        font: 700 1.6rem "Roboto";
        color: var(--color-text-in-light);
      }
      p {
        font: 700 1.2rem "Roboto";
        color: var(--color-text);
      }
    }
    .suggest-profiles {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .suggested-profile {
        margin: 1rem 0;
        height: 3.4rem;
        width: 3.4rem;
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
          margin-top: 0.1rem;
          margin-left: 0.1rem;

          height: 3rem;
          width: 3rem;
          border: 2px solid #fff;
          border-radius: 50%;
        }
      }
      .info {
        width: 16rem;
        span {
          font: 700 1.4rem "Roboto";
          color: var(--color-text);
        }
        p {
          font: 400 1.2rem "Roboto";
          color: var(--color-text-in-light);
        }
      }
      .action {
        > p {
          font: 700 1.4rem "Roboto";
          color: var(--color-backround-button);
          cursor: pointer;
        }
      }
    }
  }
  footer {
    margin-top: 4rem;
    padding: 1.6rem;
    font: 400 1.2rem "Roboto";
    color: var(--color-outline-border);
    p {
      margin-top: 1.5rem;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
