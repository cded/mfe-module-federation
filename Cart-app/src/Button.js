import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Button as MUIButton } from "@mui/material";

const Fancy = styled(MUIButton)`
  background: none;
  border: 1px solid gray;
  border-radius: 20px;
  cursor: pointer;
  display: block;
  font-size: 20px;
  outline: none;
  padding: 20px;
  width: 100%;
`;

const Button = ({ text = "button" }) => {
  useEffect(() => {
    console.log("hooks work");
  }, []);

  return <Fancy variant="contained">{text}</Fancy>;
};

export default Button;
