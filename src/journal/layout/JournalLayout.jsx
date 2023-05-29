import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components/";
//! Creamos constante para darle un tamaño especifico a nuestro menu (navbar)
const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  //! Layout para el JournalPage
  return (
    <Box sx={{ display: "flex" }} className="animate__animated animate__fadeIn animate__faster">
      {/* Navbar drawerWidth*/}
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      {/* Sidebar drawerWidth*/}
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
