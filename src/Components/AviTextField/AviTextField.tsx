import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

type TextFieldVariant = "text" | "password";

interface AviTextFieldProps {
  label: string;
  placeholder?: string;
  onChange: () => void;
  variant?: TextFieldVariant;
}

export default function AviTextField({
  label,
  placeholder,
  onChange,
  variant,
}: AviTextFieldProps) {
  const [show, setShow] = useState(false);
    return (
      <TextField
        label={label}
        fullWidth
        type={variant==="text" ? "text" :!show? "password":"text"}
        InputProps={
          variant === "password"
            ? {
                endAdornment: (
                  <Button onClick={() => setShow((prev) => !prev)}>
                    {show ? <Visibility /> : <VisibilityOff />}
                  </Button>
                ),
              }
            : {}
        }
        placeholder={placeholder}
        onChange={onChange}
        // InputLabelProps={{ shrink: shrink }}
      />
    );
 
}
