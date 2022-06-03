import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ItemList from "../ItemList/ItemList";
import discos from "../../utils/discosMock";
import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    setProducts([]);
    getProducts()
      .then((response) => {
        filterByCategory(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(discos);
      }, 2000);
    });
  };

  const filterByCategory = (discos) => {
    return discos.map((item) => {
      if (item.categoria == categoria) {
        return setProducts((products) => [...products, item]);
      }
    });
  };

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
