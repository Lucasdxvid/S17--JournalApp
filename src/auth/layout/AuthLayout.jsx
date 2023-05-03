import { Grid, Typography } from "@mui/material";

//! Layout reutilizable de nuestro diseño MUI - Los childrens son los hijos que reutilizan el layout
export const AuthLayout = ({ children, title = "" }) => {
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
        // Aqui  decimos que el width en pantallas medianas sea x tamaño, es decir que podemos hacer condicionales acorde al tamaño, etc. Podemos hacer que tenga X color en tal tamaño, etc.
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { md: 450 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {/* Hijos que utilizan este Layout */}
        {children}
      </Grid>
    </Grid>
  );
};
