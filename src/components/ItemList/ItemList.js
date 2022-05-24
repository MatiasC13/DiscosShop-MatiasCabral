import { Box, Grid } from "@mui/material";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <Box mx={4} mb={5}>
      <Grid container spacing={2}>
        {items.map((p) => (
          <Item key={p.id} p={p} />
        ))}
      </Grid>
    </Box>
  );
};

export default ItemList;
