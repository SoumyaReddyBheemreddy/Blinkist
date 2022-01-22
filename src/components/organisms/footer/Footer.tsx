import NavSection from "./nav section/NavSection";
import Logo from "../../atoms/logo/Logo";
import Box from "@mui/material/Box";
import TypographyTag from "../../atoms/typography/TypographyTag";
import { FooterStyle } from "./FooterStyle";
export default function Footer() {
    const classes = FooterStyle();
  return (
    <Box className={classes.main}>
        <Box className={classes.display}>
        <Box sx={{ margin: "16px 0px", width: "378px" }}>
        <Box sx={{ paddingBottom: "32px" }}>
          <Logo />
        </Box>
        <TypographyTag
          sx={{
            color: "#0365F2",
            marginTop: "32px",
          }}
          children="Big ideas in small packages"
          variant="subtitle1"
        />
        <TypographyTag
          sx={{ color: "#0365F2", marginBottom: "32px" }}
          children="Start learnign now"
          variant="subtitle1"
        />
      </Box>
      
      <NavSection />
      
        </Box>
     

       
     
      
    </Box>
  );
}
