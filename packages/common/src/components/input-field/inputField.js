import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const InputField = ({ text, type, handleChange }) => {
  return (
    <div>
      <Typography mt={2} align="left">{text}</Typography>
      <TextField 
        type={type}
        fullWidth={true}
        variant="outlined"
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
