import { useContext } from "react";
import { HistoryStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";

const History = () => {
  const { setIsModalHistory, selectedLicense, history, formatDateBR } =
    useContext(AdmContext);

  console.log(history);

  return (
    <HistoryStyled>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button id="close" onClick={() => setIsModalHistory(false)}>
          <img src="./icons/close-btn.png" alt="Fechar" />
        </button>
        <h2>Historico de MAC</h2>
        <h3>{selectedLicense.mac}</h3>
        <div className="form-modal">
          {history.filter((h) => h.id_license === selectedLicense.id).length ===
          0 ? (
            <h3>Sem historico</h3>
          ) : (
            <ul>
              {history
                .filter((h) => h.id_license === selectedLicense.id)
                .sort((a, b) => new Date(b.cod_dia) - new Date(a.cod_dia))
                .map((h) => (
                  <li>
                    <p>
                      {formatDateBR(h.cod_dia)} - {h.ind_action}
                    </p>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </HistoryStyled>
  );
};

export default History;
