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
      state.messageSaved = "";
    },
    //Evitamos doble click al boton + colocando isSaving en TRUE para deshabilitar el boton
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    //Establecemos las notas cuando ya la tenemos leidas desde algun lugar ???
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    //Establecemos algo cuando guardamos las notas (luego de crearla)
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    //Actualizamos una nota ya creada
    updateNote: (state, action) => {
      state.isSaving = false; // falso porque ya terminamos de editar la nota
      state.notes = state.notes.map((note) => {
        //* Si mi ID (de mi store) es igual al payload.id es porque es la nota que necesita ser actualizada / esta actualizada
        if (note.id === action.payload.id) {
          return action.payload; //Ponemos el return para marcar que ese es el valor y detenga la funcion
        }

        return note;
      });

      state.messageSaved = `${action.payload.title}, actualizada correctamente`;
    },
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
