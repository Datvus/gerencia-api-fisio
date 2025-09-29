import { useContext, useState } from "react";
import { RenewStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";
import Loader from "../Loader";

const Renew = () => {
  const { selectedLicense, setIsModalRenew, loadingRenew, updatePermission } =
    useContext(AdmContext);
  const [days, setDays] = useState(0);

  const handleChange = (e) => {
    setDays(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let baseDate;
    if (new Date(selectedLicense.dat_expira) < today || selectedLicense.ind_inative) {
      baseDate = today;
    } else {
      const [y, m, d] = selectedLicense.dat_expira.split("-").map(Number);
      baseDate = new Date(y, m - 1, d);
    }

    baseDate.setDate(baseDate.getDate() + Number(days));

    const yNew = baseDate.getFullYear();
    const mNew = String(baseDate.getMonth() + 1).padStart(2, "0");
    const dNew = String(baseDate.getDate()).padStart(2, "0");

    const updatedLicense = {
      ...selectedLicense,
      ind_inative: false,
      dat_expira: `${yNew}-${mNew}-${dNew}`,
    };

    updatePermission(updatedLicense, "Renovação de licença");
  };

  return (
    <RenewStyled>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button id="close" onClick={() => setIsModalRenew(false)}>
          <img src="./icons/close-btn.png" alt="Fechar" />
        </button>
        <h2>Renovar Licença</h2>
        <h3>{selectedLicense.mac}</h3>
        <div className="form-modal">
          <form onSubmit={handleSubmit}>
            <div className="box-input">
              <span>Dias de licenças:</span>
              <input
                type="number"
                name="days_license"
                value={days || ""}
                onChange={handleChange}
                id="inp-num"
              />
            </div>
            {loadingRenew ? <Loader /> : <button type="submit">Renovar</button>}
          </form>
        </div>
      </div>
    </RenewStyled>
  );
};

export default Renew;
