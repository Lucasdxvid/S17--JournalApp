import { Box } from "@mui/material";
//! Creamos constante para darle un tamaño especifico a nuestro menu lateral
const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  //! Layout para el JournalPage
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar drawerWidth*/}
      {/* Sidebar drawerWidth*/}
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
      {/* Toolbar */}
    </Box>
  );
};
