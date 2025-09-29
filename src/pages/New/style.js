import styled from "styled-components";

export const NewStyled = styled.section`
  margin-top: 30px;
  width: 90%;
  max-width: 400px;

  ul {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    li {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      .container {
        width: 95%;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .awnser {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        margin: 20px 0px;
      }

      button {
        width: 70px;

        background-color: transparent;

        border: 1px solid var(--color-primary);
        border-radius: 5px;

        cursor: pointer;

        transition: 200ms;

        font-family: "Roboto";
        font-size: 14px;
      }

      .yes:hover {
        background-color: var(--color-green);
      }

      .no:hover {
        background-color: var(--color-red);
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 5px;

        h2 {
            font-size: 14px;
        }

        span {
            font-size: 12px;
        }
      }
    }
  }
`;
