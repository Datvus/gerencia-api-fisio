import { useContext } from "react";
import { DeleteStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";
import Loader from "../Loader";

const Delete = () => {
  const { setIsModalDelete, loadingDelete, licensDelete, deletePermission } =
    useContext(AdmContext);

  const sendDelete = () => {
    deletePermission(licensDelete.id);
  };

  return (
    <DeleteStyled>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button id="close" onClick={() => setIsModalDelete(false)}>
          <img src="./icons/close-btn.png" alt="Fechar" />
        </button>
        <h2>Excluir MAC</h2>
        <h3>{licensDelete.mac}</h3>
        <div className="form-modal">
          <h4>Tem certeza que deseja inativar essa licença?</h4>
          {loadingDelete ? (
            <Loader />
          ) : (
            <button onClick={() => sendDelete()}>Excluir</button>
          )}
        </div>
      </div>
    </DeleteStyled>
  );
};

export default Delete;
