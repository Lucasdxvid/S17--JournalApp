import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro - cualquiera que tenga el path auth (*) va a llevarnos a nuestrro "AuthRoutes"/" */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* JournalApp - Cualquiera que no sea auth entrara a JournalRoute */}
      <Route path="/*" element={<JournalRoutes />} />
      <Route />
    </Routes>
  );
};
