import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./";

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
    console.log({ result }); // Es lo mismo si lo consologeamos o no en {}
  };
};
