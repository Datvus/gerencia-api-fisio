import styled from "styled-components";

export const LicenseStyled = styled.section`
  width: 90%;
  max-width: 400px;

  .btn-filter {
    margin: 20px 0px;

    display: flex;
    gap: 10px;

    button {
      width: 135px;
      height: 25px;

      background-color: transparent;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      cursor: pointer;

      transition: 200ms;

      font-family: "Roboto";
      font-size: 14px;
    }

    button.active {
      background-color: var(--color-primary);
      color: var(--color-black);
    }
  }

  .list-infos {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    .infos.expired {
      border: 1px solid var(--color-red);
    }

    .infos {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      cursor: pointer;

      .container {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .infos-more {
        display: flex;
        align-items: center;
        gap: 10px;

        button {
          padding: 0;

          background-color: transparent;

          border: none;

          cursor: pointer;

          img {
            width: 20px;
          }
        }
      }

      .mac {
        margin-top: 7px;
        font-size: 15px;
      }

      .name {
        margin: 7px 0px;
        font-size: 14px;
      }

      .license {
        font-size: 15px;
      }
    }

    .list-details {
      width: 95%;

      margin-bottom: 7px;

      display: flex;
      flex-direction: column;
      gap: 5px;

      .details {
        font-size: 13px;
      }

      .details-btn {
        display: flex;
        gap: 10px;

        button {
          height: 25px;
          height: 25px;

          background-color: transparent;

          border: 1px solid var(--color-primary);
          border-radius: 5px;

          cursor: pointer;

          transition: 200ms;

          font-family: "Roboto";
          font-size: 14px;
        }
      }
    }
  }

  #empty {
    margin-top: 15px;
  }
`;
