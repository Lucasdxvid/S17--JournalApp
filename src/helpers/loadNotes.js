import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("El UID del usuario no existe");

  //! Para traer todos los documentos de firebase usamos las siguientes herramientas de firebase

  const collectionRef = collection(FirebaseDB, `${uid}/journal/notas`); // Hacemos referencia a la coleccion que necesitamos (La instancia que usamos) y APUNTAMOS a la coleccion NOTES
  const docs = await getDocs(collectionRef); //Nos pide el QUERY que es nuestro collectionRef
  //! Lo de arriba nos devuelve una funcion data() al consologear el cual contiene la informacion de cada nota

  const notes = []; // Inseratermos la info de cada documento pusheando + id
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });
  console.log(notes);
  return notes;
};
