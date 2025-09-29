import { useContext } from "react";
import { NewStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";

const New = () => {
  const {
    licens,
    setIsModal,
    setNewLicense,
    setLicensDelete,
    setIsModalDelete,
    formatDateBR,
  } = useContext(AdmContext);

  const openModalRegister = (id, mac, id_file) => {
    setNewLicense({ id: id, mac: mac, id_file: id_file });
    setIsModal(true);
  };

  const openModalDelete = (id, mac) => {
    setLicensDelete({ id: id, mac: mac });
    setIsModalDelete(true);
  };

  return (
    <NewStyled>
      <ul>
        {licens.filter((l) => l.ind_new === true).length === 0 ? (
          <h2>Sem solicitações novas</h2>
        ) : (
          licens
            .filter((l) => l.ind_new === true)
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((l) => {
              return (
                <li key={l.id}>
                  <div className="container">
                    <div className="content">
                      <h2>{l.mac}</h2>
                      <span>
                        {l.id_file === "" ? "Sem identificador" : l.id_file}
                      </span>
                      <span>{formatDateBR(l.created_at)}</span>
                    </div>
                    <div className="awnser">
                      <button
                        className="yes"
                        onClick={() =>
                          openModalRegister(l.id, l.mac, l.id_file)
                        }
                      >
                        Aprovar
                      </button>
                      <button
                        className="no"
                        onClick={() => openModalDelete(l.id, l.mac)}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </li>
              );
            })
        )}
      </ul>
    </NewStyled>
  );
};

export default New;
