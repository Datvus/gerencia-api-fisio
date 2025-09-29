import { useContext, useState, useEffect } from "react";
import { LicenseStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";

const License = () => {
  const {
    licens,
    setIsModalEdit,
    setSelectedLicense,
    setIsModalRenew,
    formatDateBR,
    setIsModalInative,
    setIsModalHistory,
  } = useContext(AdmContext);

  const [page, setPage] = useState("ativas");
  const [openDetails, setOpenDetails] = useState({});

  useEffect(() => {
    setOpenDetails({});
  }, [page]);

  const toggleDetails = (id) => {
    setOpenDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const setEdit = (license) => {
    setSelectedLicense(license);
    setIsModalEdit(true);
  };

  const setRenew = (license) => {
    setSelectedLicense(license);
    setIsModalRenew(true);
  };

  const setInative = (license) => {
    setSelectedLicense(license);
    setIsModalInative(true);
  };

  const openHistory = (license) => {
    setSelectedLicense(license);
    setIsModalHistory(true);
  };

  const getFiltered = () => {
    if (!Array.isArray(licens)) return [];
    if (page === "ativas")
      return licens.filter((l) => l.status_license && !l.ind_inative);
    if (page === "expiradas")
      return licens.filter((l) => !l.status_license && !l.ind_inative);
    if (page === "inativas") return licens.filter((l) => l.ind_inative);
    return [];
  };

  return (
    <LicenseStyled>
      <div className="btn-filter">
        <button
          className={page === "ativas" ? "active" : ""}
          onClick={() => setPage("ativas")}
        >
          Ativas
        </button>
        <button
          className={page === "expiradas" ? "active" : ""}
          onClick={() => setPage("expiradas")}
        >
          Expiradas
        </button>
        <button
          className={page === "inativas" ? "active" : ""}
          onClick={() => setPage("inativas")}
        >
          Inativas
        </button>
      </div>
      {getFiltered().filter((l) => l.ind_new === false).length === 0 ? (
        <h4 id="empty">Lista vazia</h4>
      ) : (
        <ul className="list-infos">
          {getFiltered()
            .filter((l) => l.ind_new === false)
            .map((l) => (
              <li
                className={l.days_license <= 14 ? "infos expired" : "infos"}
                key={l.id}
              >
                <div className="container">
                  <div className="content">
                    <p className="mac">{l.mac}</p>
                    <p className="name">{l.name}</p>
                  </div>
                  <div className="infos-more">
                    <p className="license">
                      {l.ind_inative
                        ? "Inativo"
                        : l.status_license
                        ? `${l.days_license} dia(s) restantes`
                        : "Expirado"}
                    </p>
                    <button onClick={() => toggleDetails(l.id)}>
                      <img src="./icons/arrow.png" alt="" />
                    </button>
                  </div>
                </div>

                {openDetails[l.id] && (
                  <ul className="list-details">
                    <li className="details">Empresa: {l.company}</li>
                    <li className="details">Arquivo: {l.id_file}</li>
                    <li className="details">
                      Data de expiração: {formatDateBR(l.dat_expira)}
                    </li>
                    <li className="details">
                      Ultimo acesso: {formatDateBR(l.cod_dia)}
                    </li>
                    <li className="details-btn">
                      <button onClick={() => setEdit(l)}>Editar</button>
                      <button onClick={() => setRenew(l)}>Renovar</button>
                      {page !== "inativas" && (
                        <button onClick={() => setInative(l)}>Inativar</button>
                      )}
                      <button onClick={() => openHistory(l)}>Histórico</button>
                    </li>
                  </ul>
                )}
              </li>
            ))}
        </ul>
      )}
    </LicenseStyled>
  );
};

export default License;
