import styled from "styled-components";

export const HistoryStyled = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  background-color: var(--color-grey);

  .modal {
    width: 95%;
    max-width: 350px;

    position: relative;

    background-color: var(--color-white);

    border-radius: 5px;

    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      color: var(--color-primary);
      font-size: 18px;

      margin-top: 12px;
    }

    h3 {
      font-size: 15px;

      margin-top: 5px;
    }
  }

  .form-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 95%;

    h3 {
      margin: 10px 0px;
    }

    ul {
      margin: 20px 0px;
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 10px;

      li {
        width: 100%;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid var(--color-primary);
        border-radius: 5px;

        p {
          width: 95%;
        }
      }
    }
  }

  #close {
    position: absolute;

    right: 10px;
    top: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;

    padding: 0px;
    margin: 0px;

    cursor: pointer;

    img {
      width: 25px;
    }
  }
`;
