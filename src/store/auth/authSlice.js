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
    login: (state, action) => {},
    logout: (state, payload) => {},
    //? Cuando la APP este en proceso asincrono de autentificacion, la misma estara en estado de "loading" para bloquear botones, etc. Hasta que cargue
    checkingCredentials: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
