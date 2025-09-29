import { Toaster } from "react-hot-toast";
import { Global } from "./styles/global";
import AppRoutes from "./routes";
import Register from "./pages/Register";
import { useContext } from "react";
import { AdmContext } from "./contexts/AdmContext";
import Edit from "./pages/Edit";
import Renew from "./pages/Renew";
import Inative from "./pages/Inative";
import Delete from "./pages/Delete";
import History from "./pages/History";

function App() {
  const {
    isModal,
    isModalEdit,
    isModalRenew,
    isModalInative,
    isModalDelete,
    isModalHistory,
  } = useContext(AdmContext);

  return (
    <>
      <Toaster position="top-right" />
      {isModal === true && <Register />}
      {isModalEdit === true && <Edit />}
      {isModalRenew === true && <Renew />}
      {isModalInative === true && <Inative />}
      {isModalDelete === true && <Delete />}
      {isModalHistory === true && <History />}
      <Global />
      <AppRoutes />
    </>
  );
}

export default App;
