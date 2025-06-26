import { useContext, useEffect, useState } from "react";
import { DashboardStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";
import License from "../License";
import New from "../New";

const Dashboard = () => {
  const { getLicense } = useContext(AdmContext);
  const [page, setPage] = useState("ativas");

  useEffect(() => {
    getLicense()
  }, []);

  return (
    <DashboardStyled>
      <h1>Gerenciamento de licenças</h1>
      <div className="box-btn">
      <button className={page === "ativas" ? "active" : ""} onClick={() => setPage("ativas")}>Licenças ativas</button>
      <button className={page === "novas" ? "active" : ""} onClick={() => setPage("novas")}>Novas solicitações</button>
      </div>
      {page === "ativas" ? <License /> : <New />}
    </DashboardStyled>
  );
};

export default Dashboard;
