import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { disco } from "../../utils/discosMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getItem()
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(disco);
      }, 2000);
    });
  };

  return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
