import { MailOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const JournalPage = () => {
  //! Componentes que usan Material UI se envuelven en typography - Component cambia el elemento pero estilizado como MaterialUiy variant el h1 original
  return (
    <>
      <Typography variant={"h1"}>JournalPage</Typography>;
      <MailOutline/>
    </>
  );
};
