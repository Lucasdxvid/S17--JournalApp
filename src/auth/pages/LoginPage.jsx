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

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }} // Style Extendend, nos permite elegir el tema que creamos
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>
        <FormControl>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 1 }}>
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
            {/* Spacing es para el espacio de sus hijos, container que tiene hijos dentro - Item que es un hijo del grid */}
            {/* xs es pequeño sm pantallas pequeña-mediana, md, xl y asi sucesivamente, el number que otorgamos es el numero de columnas que ocupa */}
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
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
      </Grid>
    </Grid>
  );
};
