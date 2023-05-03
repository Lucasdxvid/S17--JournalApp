import { Grid, TextField, Typography, FormControl } from "@mui/material";

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
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  );
};
