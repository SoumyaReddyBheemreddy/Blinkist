import React from 'react';
import Avatar from '@mui/material/Avatar';
interface AvatarProps{
    children:string,
}
export default function AvatarIcon(props:AvatarProps){
       return(
           <Avatar sx={{bgcolor:"#69A6E3"}}>{props.children}</Avatar>
       );
}