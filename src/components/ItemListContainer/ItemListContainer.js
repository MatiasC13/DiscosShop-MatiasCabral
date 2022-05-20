import React from "react";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  // responsividad del título
  const theme = createTheme();
  theme.typography.h2 = {
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.75rem",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography className="title" variant="h2" align="center" mt={2}>
          {title}
        </Typography>
      </ThemeProvider>
      <ItemCount stock={5} initial={1} />
    </>
  );
};

export default ItemListContainer;
