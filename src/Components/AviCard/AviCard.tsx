import { Button, Card, CardActions, CardContent, CardHeader, CardProps, Typography } from "@mui/material";
import React, { Fragment, ReactNode } from "react";


interface AviCardProps {
    title?: string | ReactNode;
    subtitle?: string | ReactNode;
    actions?: ReactNode;
    children?: ReactNode;
    contentVariant?: 'stretch' | 'regular'
}

export default function AviCard({ 
    title,
    subtitle,
    actions,
    children,
    contentVariant = 'regular'
 }: AviCardProps) {
    return (<Card  style={contentVariant === 'stretch' ? {height: '100%', width: '100%', display: 'flex', flexDirection:'column'} : {}}>
        {
            title && <CardHeader title={title}/>
        }
        {
            children && <CardContent style={contentVariant === 'stretch' ? {flex: 1, backgroundColor: "blue" } : {}}>
                {children}
            </CardContent>
        }
        {actions && <CardActions>
            {actions}
        </CardActions>}
    </Card>
    );

}
