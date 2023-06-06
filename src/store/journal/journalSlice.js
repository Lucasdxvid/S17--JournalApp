import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false, // Bandera booleana para saber si estamos guardando nota o no / Evitamos doble posteo
    messageSaved: "", // El mensaje que guardemos
    notes: [], // Mi lista de notas
    active: null, // Nota activa
    // active: {
    //   id: "AA44",
    //   title: "",
    //   body: "",
    //   date: 444444,
    //   imageUrls: [],
    // },
  },
  reducers: {
    //Creamos una nueva nota con esta accion ligandola al boton rojo +
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload); //! El payload es la newNote
      state.isSaving = false;
    },
    //Seleccionamos la nota activa al clickearla (La que creamos con el boton +)
    setActiveNote: (state, action) => {
      state.active = action.payload; //! Establecemos la nota seleccionada en el active que era null
    },
    //Evitamos doble click al boton + colocando isSaving en TRUE para deshabilitar el boton
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    //Establecemos las notas cuando ya la tenemos leidas desde algun lugar ???
    setNotes: (state, action) => {},
    //Establecemos algo cuando guardamos las notas (luego de crearla)
    setSaving: (state) => {},
    //Actualizamos una nota ya creada
    updateNote: (state, action) => {},
    //Borramos una nota creada
    deleteNodeById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNodeById,
} = journalSlice.actions;
