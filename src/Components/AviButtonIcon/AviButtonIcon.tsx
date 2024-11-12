import { IconButton } from "@mui/material";
import React, { ReactNode } from "react";

interface AviButtonIconProps{

    children?: ReactNode;
    onClick:()=>void;
    disabled?:boolean;
}



export default function AviButtonIcon  ({onClick,children,disabled}: AviButtonIconProps){
    return <IconButton onClick={onClick} disabled={disabled}>{children}</IconButton>
}
