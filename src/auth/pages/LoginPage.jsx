import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom"; //! Le damos un ALIAS al Link de RouterDom para que no haga conflicto con el de MUI
import { Google } from "@mui/icons-material";
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
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth); //* 1er argumento (state - nuestro objeto auth (slice)) / Sirve para seleccionar o tomar alguna pieza del state, leer algo del STORE

  const isAuthenticating = useMemo(() => status === "checking", [status]); // Basicamente memorizamos el status cuando tenga el valor "CHECKING" que es cuando hacemos el dispatch de checkear

  const dispatch = useDispatch(); //? Nos permite traer nuestros thunks

  const { email, password, onInputChange } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log({ email, password });
    dispatch(startLoginWithEmailPassword({ email, password })); //? Llamamos a la accion que cambia el estado a "CHECKING"
  };

  const onGoogleSignIn = () => {
    console.log("Sign with Google");
    dispatch(startGoogleSignIn()); //? Llamamos a la accion que cambia el estado a "CHECKING"
  };

  return (
    <AuthLayout title="Login">
      <FormControl
        component="form"
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="athl12311@gmail.com"
              fullWidth
              margin="normal"
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
          </Grid>

          <Grid container display={!!errorMessage ? "" : "none"} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error"> {errorMessage}</Alert>
            </Grid>
          </Grid>

          {/* Spacing es para el espacio de sus hijos, container que tiene hijos dentro - Item que es un hijo del grid */}
          {/* xs es pequeño sm pantallas pequeña-mediana, md, xl y asi sucesivamente, el number que otorgamos es el numero de columnas que ocupa */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticating} //? Se deshabilita si esta en "checking"
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography variant="bold" sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>
          {/* El link de MUI es solo estetico pero si ponemos el atributo component podemos designarlo a ReactRouterDom */}
          <Grid container direction={"row"} justifyContent={"end"}>
            <Link
              component={RouterLink}
              color={"inherit"}
              to={"/auth/register"}
            >
              Crea tu cuenta
            </Link>
          </Grid>
        </Grid>
      </FormControl>
    </AuthLayout>
  );
};
