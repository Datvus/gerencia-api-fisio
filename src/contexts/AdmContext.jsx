import React, { createContext, use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AdmContext = createContext();

export const AdmProvider = ({ children }) => {
  const [licens, setlicens] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [newLicense, setNewLicense] = useState({});
  const [login, setLogin] = useState({});
  const [selectedLicense, setSelectedLicense] = useState({});
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [isModalRenew, setIsModalRenew] = useState(false);
  const [loadingRenew, setLoadingRenew] = useState(false);
  const [isModalInative, setIsModalInative] = useState(false);
  const [loadingInative, setLoadingInative] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [licensDelete, setLicensDelete] = useState({});
  const [history, setHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [isModalHistory, setIsModalHistory] = useState(false);

  const api = "http://localhost:3000/api/";

  const navigate = useNavigate();

  const registerLicense = () => {
    setIsModal(true);
  };

  const handleLogin = async () => {
    const username = login.username?.trim();
    const password = login.password?.trim();

    if (!username || !password) {
      toast("Preencha todos os campos!", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }

    const response = await fetch(`${api}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      toast("Usuário e/ou senha inválidos!", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }

    navigate("/dashboard");
  };

  const getLicense = async () => {
    try {
      const res = await fetch(`${api}all/permission`, {
        method: "GET",
      });

      if (!res.ok) {
        toast("Erro ao listar licenças", {
          duration: 4000,
          position: "top-right",
          icon: "❌",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });

        return;
      }

      const data = await res.json();

      setlicens(data);
      setLoading(false);
    } catch (error) {
      toast("Erro ao listar licenças", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }
  };

  const updatePermission = async (permission, ind_motivo) => {
    try {
      setLoadingEdit(true);
      setLoadingRenew(true);
      setLoadingInative(true);

      const body = {
        id: permission.id,
        name: permission.name,
        company: permission.company,
        id_file: permission.id_file,
        dat_expira: permission.dat_expira,
        ind_inative: permission.ind_inative,
        ind_motivo: ind_motivo,
      };

      const res = await fetch(`${api}update/permission`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        toast("Erro ao atualizar a permissão", {
          duration: 4000,
          position: "top-right",
          icon: "❌",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
        return;
      }

      await getLicense();

      setIsModalEdit(false);
      setIsModalRenew(false);
      setIsModalInative(false);

      toast("Permissão atualizada com sucesso!", {
        duration: 3000,
        position: "top-right",
        icon: "✅",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      setLoadingEdit(false);
      setLoadingRenew(false);
      setLoadingInative(false);

      return;
    } catch (error) {
      toast("Erro ao atualizar a permissão", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      setLoadingEdit(false);
      setLoadingRenew(false);
      setLoadingInative(false);
      return;
    }
  };

  const createLicense = async () => {
    setLoadingRegister(true);

    const { id, name, company, days_license, id_file } = newLicense;

    if (!id || !name || !company || !days_license || !id_file) {
      toast("Preencha todos os campos!", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let baseDate = today;
    baseDate.setDate(baseDate.getDate() + Number(days_license));

    const yNew = baseDate.getFullYear();
    const mNew = String(baseDate.getMonth() + 1).padStart(2, "0");
    const dNew = String(baseDate.getDate()).padStart(2, "0");

    const license = {
      id,
      name,
      days_license: 0,
      id_file,
      ind_new: false,
      status_license: true,
      dat_expira: `${yNew}-${mNew}-${dNew}`,
    };

    try {
      const res = await fetch(`${api}/update/permission`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(license),
      });

      if (!res.ok) {
        toast("Erro na criação!", {
          duration: 4000,
          position: "top-right",
          icon: "❌",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });

        return;
      }

      toast("Licença criada!", {
        duration: 4000,
        position: "top-right",
        icon: "✅",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      setIsModal(false);
      getLicense();
      setLoadingRegister(false);
      return;
    } catch (error) {
      toast("Erro na criação!", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      setLoadingRegister(false);

      return;
    }
  };

  function formatDateBR(dateString) {
    if (!dateString) return "";

    const partes = dateString.split("-");
    const data = new Date(partes[0], partes[1] - 1, partes[2]);

    return data.toLocaleDateString("pt-BR");
  }

  const deletePermission = async (id) => {
    setLoadingDelete(true);

    try {
      const res = await fetch(`${api}delete/permission`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        toast("Erro ao deletar permissão", {
          duration: 4000,
          position: "top-right",
          icon: "❌",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });

        return;
      }

      const data = await res.json();

      toast("Permissão deletada com sucesso!", {
        duration: 3000,
        position: "top-right",
        icon: "✅",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      await getLicense();
      setIsModalDelete(false);
      setLoadingDelete(false);

      return data;
    } catch (error) {
      toast("Erro ao deletar permissão", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });
      setLoadingDelete(false);
      return;
    }
  };

  const getHistory = async () => {
    try {
      const res = await fetch(`${api}history`, {
        method: "GET",
      });

      if (!res.ok) {
        toast("Erro ao listar historico", {
          duration: 4000,
          position: "top-right",
          icon: "❌",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });

        return;
      }

      const data = await res.json();

      setHistory(data);
      setLoadingHistory(false);
    } catch (error) {
      toast("Erro ao listar historico", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }
  };

  return (
    <AdmContext.Provider
      value={{
        licens,
        setlicens,
        isModal,
        setIsModal,
        registerLicense,
        newLicense,
        setNewLicense,
        login,
        setLogin,
        handleLogin,
        getLicense,
        createLicense,
        selectedLicense,
        setSelectedLicense,
        isModalEdit,
        setIsModalEdit,
        updatePermission,
        loadingEdit,
        setLoadingEdit,
        isModalRenew,
        setIsModalRenew,
        loadingRenew,
        setLoadingRenew,
        formatDateBR,
        isModalInative,
        setIsModalInative,
        loadingInative,
        setLoadingInative,
        loading,
        setLoading,
        isModalDelete,
        setIsModalDelete,
        loadingDelete,
        setLoadingDelete,
        licensDelete,
        setLicensDelete,
        deletePermission,
        loadingRegister,
        setLoadingRegister,
        getHistory,
        history,
        setHistory,
        loadingHistory,
        setLoadingHistory,
        isModalHistory,
        setIsModalHistory,
      }}
    >
      {children}
    </AdmContext.Provider>
  );
};
