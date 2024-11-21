import {
  FormControl,
  FormLabel,
  Switch,
  SwitchProps,
} from "@mui/material";
import React from "react";

interface AviSwitchProps {
  label:string
}

// type VariantType = "primary" | "secondary" | "text";

// interface AviSwitch {
//   variant: "contained" | "outlined" | "text";
//   fontSize?: string;
// }

// const primaryStyle: AviSwitch = {
//   variant: "contained",
//   fontSize: "2rem !important",
// };
// const secondaryStyle: AviSwitch = { variant: "outlined" };
// const textStyle: AviSwitch = { variant: "text" };

// const getStyle = (variant: VariantType) => {
//   switch (variant) {
//     case "primary":
//       return primaryStyle;
//     case "secondary":
//       return secondaryStyle;
//     case "text":
//       return textStyle;
//     default:
//       return primaryStyle;
//   }
// };

export default function AviSwitch(props: AviSwitchProps&SwitchProps) {
  const {label, ...other} = props
  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">{label}</FormLabel>
      <Switch
       {...other}
      />
    </FormControl>
  );
}
