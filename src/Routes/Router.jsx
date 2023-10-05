import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import LoginPage from "../pages/LoginPage";

import { AuthProvider, AuthContext } from "../context/auth";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import CadastrarClientes from "../pages/CadastrarCliente";
import CadastrarProdutos from "../pages/CadastrarProdutos";
import DashbordPage from "../pages/Dashbord";

function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);

    // if (!authenticated) {
    //   return <Navigate to="/" />;
    // } else {
    //   return children;
    // }
  };

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="cadastro" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />}>
              <Route
                path="cadastrar-clientes"
                element={<CadastrarClientes />}
              />
              <Route
                path="dashbord-page"
                element={<DashbordPage/>}
              />
              <Route
                path="cadastrar-produtos"
                element={<CadastrarProdutos />}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default AppRoutes;
