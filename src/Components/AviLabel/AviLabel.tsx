import { Typography, TypographyProps } from "@mui/material";
import React, { ReactNode } from "react";

type VariantType =
  | "AppTitle"
  | "MainTitle"
  | "SubTitle"
  | "Label"
  | "ItemLabel"
  | "readOnly";

interface AviLabelProps {
  LabelVariant: VariantType;
  labelColor?: TypographyProps["color"];
  children?: string | ReactNode;
}

const getColorVariant = ({
  color,
  variant,
}: {
  variant: VariantType;
  color: AviLabelProps["labelColor"];
}) => {
  let c: TypographyProps["color"], v: TypographyProps["variant"];
  switch (variant) {
    case "AppTitle":
      c = "error";
      v = "h1";
      break;
    case "ItemLabel":
      c = "success";
      v = "h2";
      break;
    case "Label":
      c = "warning";
      v = "h3";
      break;
    case "MainTitle":
      c = "primary";
      v = "h4";
      break;
    case "SubTitle":
      c = "secondary";
      v = "h5";
      break;
    case "readOnly":
      c = "info";
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
  LabelVariant,
  labelColor,
}: AviLabelProps) {
  
  const { color, variant } = getColorVariant({
    color: labelColor,
    variant: LabelVariant,
  });

  return (
    <Typography color={color} variant={variant} component={"span"}>
      {children}
    </Typography>
  );
}
