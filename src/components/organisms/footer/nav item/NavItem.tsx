import React from "react";
import TypographyTag from "../../../atoms/typography/TypographyTag";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
interface NavItemProps {
  title: string;
  items: string[];
  
}
interface LinkProps {
  name: string;
}
function Item(props: LinkProps) {
  return (
    <Link href="#" underline="hover" data-testid="nav-item">
      <TypographyTag sx={{margin: "16px 0px"}} children={props.name} variant="body2" />
    </Link>
  );
}
export default function NavItem(props: NavItemProps) {
  return (
    <Box role="box">
      <TypographyTag sx={{margin: "16px 0px"}} children={props.title} variant="body1" />
      {props.items.map((item,index) => (
        <Item name={item} key={index}/>
      ))}
    </Box>
  );
}
