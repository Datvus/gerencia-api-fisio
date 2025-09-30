import { useContext } from "react";
import { RegisterStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";
import Loader from "../Loader";

const Register = () => {
  const {
    setIsModal,
    newLicense,
    setNewLicense,
    createLicense,
    loadingRegister,
  } = useContext(AdmContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLicense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createLicense("Criação de licença.");
  };

  return (
    <RegisterStyled onClick={() => setIsModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button id="close" onClick={() => setIsModal(false)}>
          <img src="./icons/close-btn.png" alt="Fechar" />
        </button>
        <h2>Registro de MAC</h2>
        <h3>{newLicense.mac || "MAC não definido"}</h3>
        <div className="form-modal">
          <form onSubmit={handleSubmit}>
            <div className="box-input">
              <span>Nome:</span>
              <input
                type="text"
                name="name"
                value={newLicense.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="box-input">
              <span>Empresa:</span>
              <input
                type="text"
                name="company"
                value={newLicense.company || ""}
                onChange={handleChange}
              />
            </div>
            <div className="box-input">
              <span>Identificador:</span>
              <input
                type="text"
                name="id_file"
                value={newLicense.id_file || ""}
                onChange={handleChange}
              />
            </div>
            <div className="box-input">
              <span>Dias de licenças:</span>
              <input
                type="number"
                name="days_license"
                value={newLicense.days_license || ""}
                onChange={handleChange}
                id="inp-num"
              />
            </div>
            {loadingRegister ? (
              <Loader />
            ) : (
              <button type="submit">Cadastrar</button>
            )}
          </form>
        </div>
      </div>
    </RegisterStyled>
  );
};

export default Register;
