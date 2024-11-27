import { FormControl, FormLabel, Switch, SwitchProps } from "@mui/material";
import React from "react";

interface AviSwitchProps {
  label: string;
  value: string;
  disabled?: boolean;
  size?: SwitchProps["size"];
  checked: boolean;
  defaultChecked: boolean;
}

export default function AviSwitch(props: AviSwitchProps) {
  const { checked, defaultChecked, value, label } = props;
  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">{label}</FormLabel>
      <Switch checked={checked} defaultChecked={defaultChecked} value={value} />
    </FormControl>
  );
}
