import { useContext, useEffect, useState } from "react";
import { DashboardStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";
import License from "../License";
import New from "../New";
import Loading from "../Loading";

const Dashboard = () => {
  const {
    getLicense,
    setLoading,
    loading,
    setLoadingHistory,
    getHistory,
    loadingHistory,
  } = useContext(AdmContext);
  const [page, setPage] = useState("ativas");

  useEffect(() => {
    setLoading(true);
    setLoadingHistory(true);
    getLicense();
    getHistory();
  }, []);

  return loading && loadingHistory ? (
    <Loading />
  ) : (
    <DashboardStyled>
      <h1>Gerenciamento de licenças</h1>
      <div className="box-btn">
        <button
          className={page === "ativas" ? "active" : ""}
          onClick={() => setPage("ativas")}
        >
          Licenças
        </button>
        <button
          className={page === "novas" ? "active" : ""}
          onClick={() => setPage("novas")}
        >
          Novas solicitações
        </button>
      </div>
      {page === "ativas" ? <License /> : <New />}
    </DashboardStyled>
  );
};

export default Dashboard;
