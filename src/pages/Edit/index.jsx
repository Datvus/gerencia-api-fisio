import { useContext } from "react";
import { EditStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";
import Loader from "../Loader";

const Edit = () => {
  const {
    selectedLicense,
    setSelectedLicense,
    setIsModalEdit,
    updatePermission,
    loadingEdit,
  } = useContext(AdmContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedLicense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePermission(selectedLicense, "Edição licença");
  };

  return (
    <EditStyled>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button id="close" onClick={() => setIsModalEdit(false)}>
          <img src="./icons/close-btn.png" alt="Fechar" />
        </button>
        <h2>Edição de licença</h2>
        <h3>{selectedLicense.mac}</h3>
        <div className="form-modal">
          <form onSubmit={handleSubmit}>
            <div className="box-input">
              <span>Nome:</span>
              <input
                type="text"
                name="name"
                value={selectedLicense.name}
                onChange={handleChange}
              />
            </div>
            <div className="box-input">
              <span>Empresa:</span>
              <input
                type="text"
                name="company"
                value={selectedLicense.company}
                onChange={handleChange}
              />
            </div>
            <div className="box-input">
              <span>Identificador:</span>
              <input
                type="text"
                name="id_file"
                value={selectedLicense.id_file}
                onChange={handleChange}
              />
            </div>
            {loadingEdit ? <Loader /> : <button type="submit">Editar</button>}
          </form>
        </div>
      </div>
    </EditStyled>
  );
};

export default Edit;
