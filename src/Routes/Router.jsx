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
            <Route
              exact
              path="/home"
              element={
                // <Private>
                  <HomePage />
                // </Private>
              }
              
            />
             <Route path="cadastro" element={<RegisterPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default AppRoutes;
