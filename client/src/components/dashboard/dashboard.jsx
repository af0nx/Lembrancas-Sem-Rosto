import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.png";

const Dashboards = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // Decode the JWT token manually
          const tokenParts = token.split(".");
          const payload = JSON.parse(atob(tokenParts[1]));
          const userId = payload.userId;

          // Make an API call to get the user's name by ID
          const response = await axios.get(`http://localhost:5000/auth/${userId}/name`);
          const userName = response.data.name;
          setUserName(userName); // Set the user's name in state
          setLoading(false); // Finish loading
        } catch (error) {
          console.error("Error decoding token or fetching user name", error);
          navigate("/login");
        }
      } else {
        // If no token, redirect to login page
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    // Clear user authentication data (e.g., JWT token) from local storage
    localStorage.removeItem("token");
    // Redirect the user to the login page
    navigate("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50">
      <nav className="bg-gray-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <a href="/">
              <img src={logo} alt="Logo" className="h-12 mb-4" />
            </a>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
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
              <li>
                <button onClick={handleLogout} className="text-black">
                  Logout
                </button>
              </li>
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
