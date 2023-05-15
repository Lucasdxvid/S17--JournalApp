import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

//! Fuente central de informacion - Store que posee los reducers

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

//CombineReducer combina todos los reducers que nosotros tenemos // al usar toolKit no hay que configurarlo
