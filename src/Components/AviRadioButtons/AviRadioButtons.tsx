import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { ReactNode } from "react";

interface AviRadioButtonsProps {
  RadioGroupName: string;
  radioListLables: string[];
  defaultValue: string;
  value: string;
  OnChangeFunction: () => void;
}

// type VariantType = "primary" | "secondary" | "text";

// interface AviRadioButtonsPropsStyle {
//   variant: "contained" | "outlined" | "text";
//   fontSize?: string;
// }

// const primaryStyle: AviRadioButtonsPropsStyle = {
//   variant: "contained",
//   fontSize: "2rem !important",
// };
// const secondaryStyle: AviRadioButtonsPropsStyle = { variant: "outlined" };
// const textStyle: AviRadioButtonsPropsStyle = { variant: "text" };

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

export default function AviRadioButtons({
  OnChangeFunction,
  RadioGroupName,
  defaultValue,
  radioListLables,
  value,
}: AviRadioButtonsProps) {
  return (
    <FormControl>
      <FormLabel>{RadioGroupName}</FormLabel>
      <RadioGroup
        value={value}
        onChange={OnChangeFunction}
        defaultValue={defaultValue}
      >
        {radioListLables?.map((label, key) => (
          <FormControlLabel
            key={key}
            value={label}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
