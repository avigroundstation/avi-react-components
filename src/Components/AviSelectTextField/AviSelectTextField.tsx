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
  lable: string;
  option: string[];
  formColor: FormControlOwnProps["color"];
  size: SelectProps["size"];
}

export default function AviAppBar(props: SelectComponentProps & SelectProps) {
  const { lable, size, formColor, option, ...other } = props;

  return (
    <FormControl color={formColor} fullWidth>
      <InputLabel>{lable}</InputLabel>
      <Select fullWidth size={size} label={lable} {...other}>
        {option.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
