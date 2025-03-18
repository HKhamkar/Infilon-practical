import React from "react";
import { Button } from "@mui/material";

const CustomButton = (props) => {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: "4px",
        fontWeight: "400",
        textTransform: "none",
        boxShadow: "none",
        ...props.sx,
        fontSize: "16px",
      }}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
