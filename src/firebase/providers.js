import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

//! Proveedores de autentificacion

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    //? Esto nos pide el auth (nuestra funcion FirebaseAuth de config.js) y provider que es el de GOOGLE
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result); // De aqui obtenemos el access token, etc. Lo usamos para ver como obtenemos la verificarlo directamente desde la parte de google
    const { displayName, email, photoURL, uid } = result.user; //? desestructuramos USER (cuando hacemos console.log del ({user})

    return {
      ok: true, //? Esto es algo personalizado donde obtendremos true si sale bien
      // User Info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false, //? Si falla el ok sera false
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    console.log({ email, password, displayName });
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    //Esto basicamente nos logea el usuario creado automaticamente
    await updateProfile(FirebaseAuth.currentUser, { displayName }); // Nos permite actualizar el nombre de usuario en Firebase

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message }; // Si a error.message lo cambiamos por "hola mundo" cambia el msj por ej
  }
};

//! Todo este provider luego lo llamamos en nuestro THUNK
