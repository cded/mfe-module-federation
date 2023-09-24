import React from "react";
import { Box } from "@mui/material";

const styles = {
  cartButton: {
    background: "seagreen",
    color: `#fff`,
    borderRadius: "5px",
    padding: "5px 10px",
  },
};

const Cart = () => {
  return <Box sx={styles.cartButton}>Cart: 4 items</Box>;
};

export default Cart;
