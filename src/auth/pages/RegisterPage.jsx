import { Link as RouterLink } from "react-router-dom"; //! Le damos un ALIAS al Link de RouterDom para que no haga conflicto con el de MUI
import {
  Grid,
  TextField,
  Typography,
  FormControl,
  Button,
  Link,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
  email: "athl12311@gmail.com",
  password: "123456",
  displayName: "Dual Athloner",
};
export const RegisterPage = () => {
  const { displayName, email, password, onInputChange, formState } =
    useForm(formData); // es lo mismo

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Registro">
      <FormControl component="form" onSubmit={onSubmit}>
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

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
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
