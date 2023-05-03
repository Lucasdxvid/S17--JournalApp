import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";

export const JournalPage = () => {
  //! Componentes que usan Material UI se envuelven en typography - Component cambia el elemento pero estilizado como MaterialUiy variant el h1 original
  return (
    <JournalLayout>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        deleniti quam, accusamus repudiandae dolorum expedita cumque dolore
        nostrum id reiciendis incidunt dolorem placeat laudantium molestias
        aperiam, aliquam vel in natus.
      </Typography>
    </JournalLayout>
  );
};
