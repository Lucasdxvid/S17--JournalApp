import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // 1er param Nuestro firebaseAuth, 2do funcion callback que ejecutaremos cuando se reciba el siguiente valor
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
      dispatch(startLoadingNotes())
    });
  }, []); //Cuando el estado de la autentificacion cambia - Esto devuelve un OBSERVABLE (funcion que emite valores, cuando el estado de la funcion cambia esta funcion se vuelve a disparar)

  return status; // Me dira si esta o no autentificado el estado
};
