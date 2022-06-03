import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import discos from "../../utils/discosMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setProduct(productFilter);
  }, []);

  const productFilter = discos.find((d) => {
    return d.id == id;
  });

  return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
