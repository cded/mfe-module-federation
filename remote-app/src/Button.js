import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Button as MUIButton } from "@mui/material";

const Fancy = styled(MUIButton)`
  color: #fff;
  background: #4b4be8;
`;

const Button = ({ text = "button" }) => {
  useEffect(() => {
    console.log("hooks work");
  }, []);
  return <Fancy variant="contained">{text}</Fancy>;
};

export default Button;
