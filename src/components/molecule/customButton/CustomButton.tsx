import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TypographyTag from "../../atoms/typography/Typography";
interface CustomButtonProps{
    variant: "text" | "outlined" | "contained" 
}
export default function CustomButton(props:CustomButtonProps){
    return (
      <Button variant={props.variant} startIcon={<AddIcon />} fullWidth={true}>
        <TypographyTag children='Add to library' variant='body1' />
      </Button>
    );
}