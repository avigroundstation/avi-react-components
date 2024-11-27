import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

interface AviRadioButtonsProps {
  radioGroupName: string;
  radioListLables: string[];
  defaultValue: string;
  value: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function AviRadioButtons({
  onChangeFunction,
  radioGroupName,
  defaultValue,
  radioListLables,
  value,
}: AviRadioButtonsProps) {
  return (
    <FormControl>
      <FormLabel>{radioGroupName}</FormLabel>
      <RadioGroup
        value={value}
        onChange={onChangeFunction}
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
