import React from "react";
import { Container, Box } from "@mui/material";
import banner from "../../../assets/banner/banner.png";
import TypographyTag from "../../atoms/typography/TypographyTag";
export default function Banner() {
  return (
    <Container fixed>
      <Container fixed sx={{ backgroundColor: "#F1F6F4",marginTop:"32px"}}>
        <Box
          sx={{ display: { sm: "block", md: "flex" }, alignItems: "center" }}
        >
          <Box sx={{ margin: "45px" }}>
            <Box sx={{ width: { sm: "319px" }, height: { sm: "90px" } }}>
              <TypographyTag
                variant="h1"
                sx={{ fontSize: { xs: "25px", sm: "36px" } }}
                children="Explore Books on entrepreneurship"
              />
            </Box>
            <Box
              sx={{
                width: { md: "461px" },
                height: { md: "69px" },
                padding: "15px 0px",
                marginRight: { md: "80px" },
              }}
            >
              <TypographyTag
              sx={{fontWeight:"400",color:"#6D787E"}}
                variant="subtitle2"
                children="Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
              />
            </Box>
          </Box>
          <Box >
            <img src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
