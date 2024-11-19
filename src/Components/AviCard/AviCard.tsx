import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardProps,
  Typography,
} from "@mui/material";
import React, { Fragment, ReactNode } from "react";
import { theme } from "../../theme";

interface AviCardProps {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  contentVariant?: "stretch" | "regular";
  elevation?: number;
}

export default function AviCard({
  title,
  subtitle,
  actions,
  children,
  contentVariant = "regular",
  elevation = 24,
}: AviCardProps) {
  return (
    <Card
      variant="elevation"
      elevation={elevation}
      style={
        contentVariant === "stretch"
          ? {
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }
          : {}
      }
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {title && <CardHeader title={title} subheader={subtitle} />}
        {actions && <CardActions>{actions}</CardActions>}
      </div>

      <div>
        {children && (
          <CardContent style={contentVariant === "stretch" ? { flex: 1 } : {}}>
            {children}
          </CardContent>
        )}
      </div>
    </Card>
  );
}
