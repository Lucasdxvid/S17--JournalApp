import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./";
export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth); //* 1er argumento (state - nuestro objeto auth (slice)) / Sirve para seleccionar o tomar alguna pieza del state, leer algo del STORE
  const { notes } = useSelector((state) => state.journal); //! Mapearemos las notas existentes en nuestro SIDEBAR

  return (
    //! Drawer es el SideBar
    <Box
      component={"nav"}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={"div"}>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        {/* Mapeo */}
        <List>
          {notes.map((note) => (
            <SideBarItem key={note.id} note={note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
