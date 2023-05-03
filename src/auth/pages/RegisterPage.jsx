import { Link as RouterLink } from "react-router-dom"; //! Le damos un ALIAS al Link de RouterDom para que no haga conflicto con el de MUI
import { Google } from "@mui/icons-material";
import {
  Grid,
  TextField,
  Typography,
  FormControl,
  Button,
  Link,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <FormControl>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <TextField
                label="Nombre Completo"
                type="text"
                placeholder="Dual Athloner"
                fullWidth
                margin="normal"
              />
            </Grid>

            <TextField
              label="correo"
              type="email"
              placeholder="athl12311@gmail.com"
              fullWidth
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="**********"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
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
