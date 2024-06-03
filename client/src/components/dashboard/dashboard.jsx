import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.png";

const Dashboards = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // Decodificar o token JWT manualmente
          const tokenParts = token.split(".");
          const payload = JSON.parse(atob(tokenParts[1]));
          const userId = payload.userId;
          setUserId(userId);
          setIsAuthenticated(true);

          // Fazer uma chamada à API para obter o nome do usuário pelo ID
          const response = await axios.get(`http://localhost:5000/auth/${userId}/name`);
          const userName = response.data.name;
          setUserName(userName); // Define o nome do usuário no estado
          setLoading(false); // Concluir o carregamento
        } catch (error) {
          console.error("Erro ao decodificar o token ou buscar o nome do usuário", error);
          navigate("/login");
        }
      } else {
        // Se não houver token, redirecionar para a página de login
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    // Limpar dados de autenticação do usuário (por exemplo, token JWT) do armazenamento local
    localStorage.removeItem("token");
    // Redirecionar o usuário para a página de login
    navigate("/login");
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="bg-gray-50">
      <nav className=" bg-gray-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <a href="/">
              <img src={logo} alt="Logo" className="h-12 mb-4" />
            </a>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">

              <li>
                <a
                  href="/dashboard"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-blackdark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/servicosai"
                  className="block py-2 px-3 text-black  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Vendas
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/promocoes"
                  className="block py-2 px-3 text-black  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Emails
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/promocoes"
                  className="block py-2 px-3 text-black  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Gráficos
                </a>
              </li>
              <button onClick={handleLogout} className="text-black">
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-w-[800px] mx-auto text-center flex flex-col justify-center">
        <br /> <br />
        <div className="max-w-2xl mx-auto text-black p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Bem-vindo ao Dashboard da Ilustra, {userName}!
          </h1>
          <br /> <br />

          <br /> <br />
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Atenção:</h2>
            <p className="text-lg mb-4">
              Pessoas não autorizadas são extremamente proibidas de acessar este dashboard. Por favor, contate o suporte o mais rápido possível se você acredita que está acessando esta página por engano.
            </p>
            <br />
           
          </div>
          <br /> <br />
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
