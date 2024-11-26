import { AppBar, Toolbar } from "@mui/material";
import React, { ReactNode } from "react";

interface AviAppBarProps {
  children?: ReactNode;
}

export default function AviAppBar({ children }: AviAppBarProps) {
  return (
    <AppBar position="static">
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}
