import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "../hooks";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    // Si estoy autenticado voy a journal y si no al login
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
      <Route />
    </Routes>
  );
};

// {/* Login y Registro - cualquiera que tenga el path auth (*) va a llevarnos a nuestrro "AuthRoutes"/" */}
// <Route path="/auth/*" element={<AuthRoutes />} />

// {/* JournalApp - Cualquiera que no sea auth entrara a JournalRoute */}
// <Route path="/*" element={<JournalRoutes />} />
