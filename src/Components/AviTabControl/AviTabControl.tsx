import { Tab, Tabs, TabsProps } from "@mui/material";
import React from "react";

interface AviTabControlProps {
  tabs?: { label: string; value: string }[];
}

export default function AviTabControl({
  tabs,
  ...other
}: AviTabControlProps & TabsProps) {
  return (
    <Tabs variant="scrollable" {...other} sx={{}}>
      {tabs?.map((tab, key) => (
        <Tab key={key} value={tab.value} label={tab.label} />
      ))}
    </Tabs>
  );
}
