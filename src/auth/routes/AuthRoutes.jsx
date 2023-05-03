import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      {/* Rutas */}
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/* Ruta Default (User no Autentificado) */}
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
