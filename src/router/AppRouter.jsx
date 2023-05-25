import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { FirebaseAuth } from "../firebase/config";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../ui/";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  //? Podemos estar pendientes a los cambios del usuario actual con firebase
  useEffect(() => {
    // 1er param Nuestro firebaseAuth, 2do funcion callback que ejecutaremos cuando se reciba el siguiente valor
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    }); //Cuando el estado de la autentificacion cambia - Esto devuelve un OBSERVABLE (funcion que emite valores, cuando el estado de la funcion cambia esta funcion se vuelve a disparar)
  }, []);

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
