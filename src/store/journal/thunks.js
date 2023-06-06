import { collection, doc, setDoc } from "firebase/firestore/lite"; // De aqui tomamos el nodo / ruta  /id:user-1/journal/notas
import { FirebaseDB } from "../../firebase/config"; // Nuestra base de datos no relacional FIRESTORE
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./";
import { loadNotes } from "../../helpers";

//! Empezamos el proceso de subida de nota a fireStore (GetState para ver todo el estado)
export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote()); // Deshabilitamos el boton + al clickearlo

    //* UID: Para grabar en fireBase usamos el UID para saber como queremos almacenar la info en la base de datos

    const { uid } = getState().auth; // Desestruramos el UID del getState en la rama de AUTH

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notas`)); // Establecemos notas acorde al UID del user
    await setDoc(newDoc, newNote); // Colocamos la referencia al documento y luego la nota(objeto) que queremos insertar o grabar

    newNote.id = newDoc.id; // Le asignamos un ID a la nota creada (ID generado por FireStore)

    //! Dispatch de la nueva nota generada al usar el boton +
    dispatch(addNewEmptyNote(newNote)); //El payload es la newNote
    dispatch(setActiveNote(newNote));
  };
};

//! Cargar notas en fireStore - A esto lo llamamos en nuestro customHook useCheckAuth
export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth; // Desestruramos el UID del getState en la rama de AUTH
    if (!uid) throw new Error("El UID del usuario no existe");
   const notes = await loadNotes(uid); // Traemos esto de nuestro HELPER
    dispatch(setNotes(notes)) // Aqui establecemos las notas ya existentes
  };
};
