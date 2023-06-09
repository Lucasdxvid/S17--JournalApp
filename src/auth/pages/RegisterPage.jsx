import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom"; //! Le damos un ALIAS al Link de RouterDom para que no haga conflicto con el de MUI
import {
  Grid,
  TextField,
  Typography,
  FormControl,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  //* Tenemos 2 argumentos: funcion que valida - Mensaje error a mostrar
  email: [(value) => value.includes("@"), "El correo necesita un @"],
  password: [
    (value) => value.length >= 6,
    "La contraseña tiene que tener por lo menos 6 letras",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector((state) => state.auth); //* 1er argumento (state - nuestro objeto auth (slice)) / Sirve para seleccionar o tomar alguna pieza del state, leer algo del STORE
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  ); //Memorizamos el estado checking y su dependencia es cuando cambia el estado ese

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations); // El formValidations lo pasamos como segundo argumento
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return; // si no es valido que pare ahi
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Registro">
      <FormControl component="form" onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <TextField
                label="Nombre Completo"
                type="text"
                placeholder="Dual Athloner"
                fullWidth
                margin="normal"
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted} // Doble negacion lo convierte en booleano && y si el formSubmitted se disparo
                helperText={displayNameValid}
              />
            </Grid>

            <TextField
              label="correo"
              type="email"
              placeholder="athl12311@gmail.com"
              fullWidth
              margin="normal"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted} // Doble negacion lo convierte en booleano && y si el formSubmitted se disparo
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="**********"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted} // Doble negacion lo convierte en booleano && y si el formSubmitted se disparo
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained" //Arriba tenemos un errorMessage que sera "display" cuando el errorMessage sea NULL
                fullWidth
                type="submit"
                disabled={isCheckingAuthentication}
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          {/* El link de MUI es solo estetico pero si ponemos el atributo component podemos designarlo a ReactRouterDom */}
          <Grid container direction={"row"} justifyContent={"end"}>
            <Typography sx={{ mr: 1 }}>¿Tienes una cuenta?</Typography>
            <Link component={RouterLink} color={"inherit"} to={"/auth/login"}>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </FormControl>
    </AuthLayout>
  );
};
