import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import TypographyTag from "../../atoms/typography/TypographyTag";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AvatarIcon from "../../atoms/avatar/AvatarIcon";
import Logo from "../../atoms/logo/Logo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "@mui/material/Link";
interface HeaderProps {}
export default function Header(props: HeaderProps) {
  return (
    <AppBar position="static" sx={{background:"#FFFFFF"}}>
      <Toolbar>
        <Logo />
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <IconButton
            size="large"
            edge="start"
           
            aria-label="search"
            sx={{ ml: 4, alignSelf: "center",color:" #042330" }}
            
          >
            <SearchIcon />
          </IconButton>
         
          <Link
            href="#"
            sx={{ ml: 4, alignSelf: "center" }}
           
            underline="hover"
            color=" #042330"
          >
            <TypographyTag children='My Library' variant='body1' />
            
          </Link>
        </Box>

        <AvatarIcon children="A" />
        <ExpandMoreIcon />
      </Toolbar>
    </AppBar>
  );
}
