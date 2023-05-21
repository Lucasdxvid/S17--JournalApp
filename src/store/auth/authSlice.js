import { createSlice } from "@reduxjs/toolkit";

//! Slice de autentificacion con las funciones / acciones que llamaremos (Action Creation Functions)
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // "checking", "not-authenticated", "authenticated"
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    // action -> {} = action.payload
    login: (state, { payload }) => {
      state.status = "authenticated"; // El estado es asi cuando se autentifica
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null; // Es null porque no hay error
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated"; // El estado es asi cuando no se autentifica
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage; // Es el error de autenticacion de nuestro TRY CATCH en el PROVIDER js / thunks
    },
    //? Cuando la APP este en proceso asincrono de autentificacion, la misma estara en estado de "loading" para bloquear botones, etc. Hasta que cargue
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
