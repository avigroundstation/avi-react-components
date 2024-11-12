import { Button, ButtonProps } from "@mui/material";
import React, { ReactNode } from "react";

type VariantType = 'primary'|'secondary'|'text'

interface AviButtonProps{

    variant:VariantType
    children?: ReactNode;
    onClick:()=>{}
}


interface ButtonPropsStyle {
    variant: 'contained'| 'outlined'| 'text'
}


const primaryStyle: ButtonPropsStyle = {variant:'contained'}
const secondaryStyle: ButtonPropsStyle = {variant:'outlined'}
const textStyle: ButtonPropsStyle = {variant:'text'}

const getStyle = (variant:VariantType)=>{
    switch (variant) {
        case 'primary':
            return primaryStyle
        case 'secondary':
            return secondaryStyle
        case 'text':
            return textStyle
        default:
            return primaryStyle
    }
}

export default function AviButton  ({variant,onClick,children}: AviButtonProps){
    return <Button  {...getStyle(variant)} onClick={onClick}>{children}</Button>

}
