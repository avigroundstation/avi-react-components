import { Button, ButtonProps } from "@mui/material";
import React from "react";


interface AviButtonProps extends ButtonProps{

}

export default function AviButton  (props: AviButtonProps){
    return <Button {...props}></Button>

}
