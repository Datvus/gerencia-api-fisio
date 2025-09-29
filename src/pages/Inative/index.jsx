import { useContext } from "react";
import { InativeStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";
import Loader from "../Loader";

const Inative = () => {
  const {
    setIsModalInative,
    loadingInative,
    selectedLicense,
    updatePermission,
  } = useContext(AdmContext);

  const sendInative = () => {
    const uptadeLicense = {
      ...selectedLicense,
      ind_inative: true,
    };

    updatePermission(uptadeLicense, "Inativação de licença");
  };

  return (
    <InativeStyled>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button id="close" onClick={() => setIsModalInative(false)}>
          <img src="./icons/close-btn.png" alt="Fechar" />
        </button>
        <h2>Inativação de licença</h2>
        <h3>{selectedLicense.mac}</h3>
        <div className="form-modal">
          <h4>Tem certeza que deseja inativar essa licença?</h4>
          {loadingInative ? (
            <Loader />
          ) : (
            <button onClick={() => sendInative()}>Inativar</button>
          )}
        </div>
      </div>
    </InativeStyled>
  );
};

export default Inative;
