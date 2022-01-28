import logo from "../../../assets/logo/logo.png";
import React from 'react';
interface LogoProps{

}
export default function Logo(props:LogoProps){
    return(
        <img src={logo} alt = "Logo" title="Logo" /> 
    );
}