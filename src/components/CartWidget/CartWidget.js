import React from "react";
import IconButton from "@mui/material/IconButton";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

const CartWidget = () => {
  return (
    <IconButton>
      <LocalGroceryStoreOutlinedIcon fontSize="large" />
    </IconButton>
  );
};

export default CartWidget;
