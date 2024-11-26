import { Typography, TypographyProps } from "@mui/material";
import React, { ReactNode } from "react";

type VariantType =
  | "AppTitle"
  | "MainTitle"
  | "SubTitle"
  | "Lable"
  | "ItemLable"
  | "readOnly";

interface AviLableProps {
  LableVariant: VariantType;
  lableColor?: `${string}#`;
  children?: string | ReactNode;
}

const getColorVariant = ({
  color,
  variant,
}: {
  variant: VariantType;
  color: AviLableProps["lableColor"];
}) => {
  let c: string, v: TypographyProps["variant"];
  switch (variant) {
    case "AppTitle":
      c = "red";
      v = "h1";
      break;
    case "ItemLable":
      c = "green";
      v = "h2";
      break;
    case "Lable":
      c = "pink";
      v = "h3";
      break;
    case "MainTitle":
      c = "#FFF";
      v = "h4";
      break;
    case "SubTitle":
      c = "black";
      v = "h5";
      break;
    case "readOnly":
      c = "gray";
      v = "body1";
      break;
  }
  if (color) {
    c = color;
  }
  return { color: c, variant: v };
};

export default function AviButton({
  children,
  LableVariant,
  lableColor,
}: AviLableProps) {
  const { color, variant } = getColorVariant({
    color: lableColor,
    variant: LableVariant,
  });
  return (
    <Typography color={color} variant={variant} component={"span"}>
      {children}
    </Typography>
  );
}
