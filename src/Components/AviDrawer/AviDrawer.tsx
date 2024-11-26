import { Drawer, DrawerProps } from "@mui/material";
import React, { ReactNode } from "react";

interface AviDrawerProps {
  variant?: DrawerProps["variant"];
  children?: ReactNode;
  anchor?: DrawerProps["anchor"];
  onClose?: () => void;
  open:boolean
}

export default function AviDrawer({
  variant,
  anchor,
  children,
  onClose,
  open
}: AviDrawerProps) {
  return (
    <Drawer
    sx={{width:"20%", height:"100%"}}
      anchor={anchor??"left"}
      variant={variant ?? "persistent"}
      open={open}
      onClose={onClose}
    >
      {children}
    </Drawer>
  );
}
