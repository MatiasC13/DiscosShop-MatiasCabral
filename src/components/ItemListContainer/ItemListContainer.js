import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);

  const discos = [
    {
      id: 4,
      imagen: "Live.jpg",
      titulo: "Live",
      artista: "Lacrimosa",
      precio: 400,
    },
    {
      id: 3,
      imagen: "Stille.jpg",
      titulo: "Stille",
      artista: "Lacrimosa",
      precio: 300,
    },
    {
      id: 2,
      imagen: "einsamkeit.jpg",
      titulo: "Einsamkeit",
      artista: "Lacrimosa",
      precio: 200,
    },
    {
      id: 1,
      imagen: "Angst.jpg",
      titulo: "Angst",
      artista: "Lacrimosa",
      precio: 100,
    },
  ];

  // Promesa
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(discos);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

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
        <Typography className="title" variant="h2" align="center" mt={2} mb={4}>
          {title}
        </Typography>
      </ThemeProvider>
      <ItemList items={products} />
    </>
  );
};

export default ItemListContainer;
