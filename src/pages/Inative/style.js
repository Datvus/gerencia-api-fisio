import styled from "styled-components";

export const InativeStyled = styled.section`
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

    h4 {
      text-align: center;
      margin-top: 15px;
    }

    button {
      width: 100px;
      height: 25px;

      background-color: transparent;

      border: 1px solid var(--color-red);
      border-radius: 5px;

      cursor: pointer;

      transition: 200ms;

      font-family: "Roboto";
      font-size: 14px;

      margin: 15px 0px;
    }

    button:hover {
      background-color: var(--color-red);
      color: var(--color-white);
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
