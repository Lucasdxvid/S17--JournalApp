import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSavingNote, startUploadingFiles } from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
  const dispatch = useDispatch();
  //Cambiamos el nombre de active a note
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date); // Guardamos la fecha para que no cambie
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef(); //Simulamos un click para reemplazar el input de subir imagenes por un icono

  //! Realizamos cambios a la nota
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]); // Cuando cualquier propiedad del formState cambie hacemos el dispatch de una nueva accion

  //! Mensaje alerta
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    } // Se dispara cuando se mayor a 0
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSavingNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return; // Si no seleccionamos imagenes, no devolvemos nada

    dispatch(startUploadingFiles(target.files));
  };

  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight={"light"}>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        {/* //!Para seleccionar muchas imagenes ponemos la property MULTIPLE */}
        <input
          type="file"
          ref={fileInputRef} //* Simulamos un click con el UseRef al clickar el ICONBUTTON de abajo
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()} //! Usando el useRef podemos simular el click
        >
          <UploadOutlined />
        </IconButton>

        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingresa un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth //Ocupe el maximo ancho
          multiline
          placeholder="¿Que sucedió en el día de hoy?"
          minRows={5} // tamaño del espacio de escritura
          name="body"
          value={body}
          onChange={onInputChange}
        />

        {/* Galería de Imagenes */}
        <Grid item margin={2} width={"50%"}>
          <ImageGallery />
        </Grid>
      </Grid>
    </Grid>
  );
};
