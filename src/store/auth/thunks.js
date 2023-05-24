import {
  signInWithGoogle,
  registerUserWithEmailPassword,
  loginWithEmailPassword,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

//? Thunks - acciones que podemos despachar pero que internamente tienen una tarea asíncrona / si fuera síncrona lo haríamos con los reducers

export const checkingAuthentification = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle(); //Si no ponemos await al consologear no espera a que la promesa termine

    //* Si sale mal devolvemos la accion logout la cual coloca el estado en "not-authenticated" y credenciales en null
    if (!result.ok) return dispatch(logout(result.errorMessage)); //? Llamamos al logout si sale mal de nuestro slice - Return para que no siga ejecutandose
    //* Si sale bien devolvemos la accion login la cual coloca el estado en "authenticated" y credenciales en
    dispatch(login(result)); //! El PAYLOAD es el result
    console.log({ result }); // Es lo mismo si lo consologeamos o no en {}
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    //Desestructuramos resp
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    //* Si algo sale mal llamamos a la accion logout
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    console.log(result);

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};
