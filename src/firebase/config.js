// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCmTJMeqX7SRyCXrb7yqARhXxScNUPLMY",
  authDomain: "journal-app-31264.firebaseapp.com",
  projectId: "journal-app-31264",
  storageBucket: "journal-app-31264.appspot.com",
  messagingSenderId: "352562876167",
  appId: "1:352562876167:web:1c39d8eeafe108aed9ffa2",
};

// Initialize Firebase - objetos
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp); //? Iniciamos la autentificacion de firebase
export const FirebaseDB = getFirestore(FirebaseApp); //? Iniciamos la base de datos no relacional FIRESTORE
