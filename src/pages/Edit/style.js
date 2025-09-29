import styled from "styled-components";

export const EditStyled = styled.section`
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
    width: 95%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 15px 0px;

    form {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;
    }

    button {
      width: 100px;
      height: 25px;

      background-color: transparent;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      cursor: pointer;

      transition: 200ms;

      font-family: "Roboto";
      font-size: 14px;

      margin-top: 15px;
    }
  }

  .box-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    width: 100%;

    span {
      font-size: 12px;
    }

    input {
      width: 100%;
      height: 30px;

      box-sizing: border-box;

      outline: none;

      border: 1px solid var(--color-primary);
      border-radius: 5px;
    }
  }

  #inp-num {
    max-width: 90px;
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
