import { Box } from "@mui/material";
import { NavBar } from "../components/NavBar";
//! Creamos constante para darle un tamaño especifico a nuestro menu (navbar)
const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  //! Layout para el JournalPage
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar drawerWidth*/}
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar drawerWidth*/}
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
      {/* Toolbar */}
    </Box>
  );
};
