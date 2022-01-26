import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import TypographyTag from "../../atoms/typography/TypographyTag";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import { Link } from "@mui/material";
import Menu from "@mui/material/Menu";
import ExploreGridItems from "./ExploreGridItems";
import { Container, Box } from "@mui/material";
const useStyle = makeStyles({
  button: {
    display: "flex",
    alignItems: "center",
    color: "#03314B",
    textTransform: "none",
    "&.MuiTypography-root":{
      color: "#03314B",
    },
    "&:hover": {
      borderBottom: "1px solid #2CE080",
    },
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#F1F6F4",
    },
  },
  navItems: {
    padding: "32px 24px",
  },
});

export default function Explore() {
  const [isDown, setIsDown] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleIcon = () => {
    setIsDown(!isDown);
  };
  const handleClick = (event: any) => {
    if (!isDown) {
      setAnchorEl(null);
      
    } else {
      setAnchorEl(event.currentTarget);
      
    }
    handleIcon();
  };

  const classes = useStyle();
  return (
    <>
      <Box sx={{ alignSelf: "center"}}>
        <Link
          className={classes.button}
          underline="none"
          onClick={handleClick}
          sx={{ padding: "0px" }}
        >
          <TypographyTag variant="body1" children="Explore" />

          <IconButton>
            {isDown ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
        </Link>
        {!isDown && (
          <hr
            style={{
              borderColor: "#2CE080",
              borderStyle: "solid",
              borderTop: "1px",
              marginTop: "-7px",
              padding: "0px",
              width: "100%",
            }}
          />
        )}
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(!isDown)}
        onClose={handleClick}
        PaperProps={{
          style: {
            width: "100%",
          },
        }}
        className={classes.menu}
        // BackdropProps={{
        //   invisible: false
        // }}
        
      >
        <Container fixed className={classes.navItems}>
          <ExploreGridItems />
        </Container>
      </Menu>
    </>
  );
}
