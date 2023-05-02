import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { purpleTheme } from "./";

export const AppTheme = ({ children }) => {
  return (
    //! Inicializacion de Material UI (HOC que recibe nuestra APP de children)
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};
