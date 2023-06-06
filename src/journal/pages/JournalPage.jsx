import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  //! Componentes que usan Material UI se envuelven en typography - Component cambia el elemento pero estilizado como MaterialUiy variant el h1 original

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* Si active es null (no tenemos nota actia) mostramos X pantalla y si no la otra */}
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving} //! Cuando el isSaving esta en TRUE, el boton se deshabilita
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
