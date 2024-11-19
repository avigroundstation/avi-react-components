import { TextField } from "@mui/material";
import React, { ReactNode } from "react";

interface AviTextFieldProps {
  label: string;
  placeholder?: string;
  shrink?: boolean | undefined;
  onChange: () => void;
}

export default function AviTextField({
  label,
  placeholder,
  shrink,
  onChange,
}: AviTextFieldProps) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth
      InputLabelProps={{ shrink: shrink }}
    ></TextField>
  );
}
