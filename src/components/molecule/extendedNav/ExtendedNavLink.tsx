import React from "react";
import { ExtendedNavLinkStyle } from "./ExtendedNavLinkStyle";
import TypographyTag from "../../atoms/typography/TypographyTag";
interface ExtendedNavProps{
    children:string,
    icon:any
}

export default function ExtendedNavLink(props:ExtendedNavProps){
    const classes = ExtendedNavLinkStyle();
    return(
        <div className={classes.display}>
        {React.createElement(props.icon,{className:classes.icon})}
        <TypographyTag className={classes.text} variant="body2">
                {props.children}
        </TypographyTag>
    </div>
    );
}