import NavSection from "./nav section/NavSection";
import Logo from "../../atoms/logo/Logo";
import Box from "@mui/material/Box";
import TypographyTag from "../../atoms/typography/TypographyTag";
import { FooterStyle } from "./FooterStyle";
import { Container } from "@mui/material";
export default function Footer() {
  const classes = FooterStyle();
  return (
    <div className={classes.main}>
      <Container >
        <Box  sx={{display:{sm:"block",md:"flex"},paddingTop:"32px"}}>
          <Box sx={{ margin: "16px 0px", width: "378px" }}>
            <Box>
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
        <Box sx={{padding:"38px 0px"}}>
          <TypographyTag

              children="© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies"
              variant="caption"
            />
          </Box>
      </Container>
    </div>
  );
}
