import {
  FormControl,
  FormControlOwnProps,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import React from "react";

interface SelectComponentProps {
  label: string;
  option: string[];
  formColor: FormControlOwnProps["color"];
  size: SelectProps["size"];
}

export default function AviAppBar(props: SelectComponentProps & SelectProps) {
  const { label, size, formColor, option, ...other } = props;

  return (
    <FormControl color={formColor} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select fullWidth size={size} label={label} {...other}>
        {option.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
