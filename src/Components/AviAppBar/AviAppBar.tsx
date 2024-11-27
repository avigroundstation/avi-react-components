import { AppBar, Toolbar } from "@mui/material";
import React, { ReactNode } from "react";

interface AviAppBarProps {
  children?: ReactNode;
  height?: `${number}rem`;
}

export default function AviAppBar({ children, height }: AviAppBarProps) {
  return (
    <div style={{ height }}>
      <AppBar
        sx={{
          backdropFilter: "blur(1px)",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar variant="dense">{children}</Toolbar>
      </AppBar>
    </div>
  );
}
