import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import TypographyTag from "../../atoms/typography/TypographyTag";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import ExploreGridItems from "./ExploreGridItems";
import { Container, Box,Link } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
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
  const[open,setOpen] = useState(false);
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
    setOpen(!open);
    handleIcon();
  };
  const handleClose = () => {
    setOpen(false);
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
        marginThreshold={0}
        PaperProps={{
          style: {
            width: "100%",
            maxWidth: "100%",
            left: 0,
            right: 0,
            borderRadius:"0px"
          },
        }}
        
        className={classes.menu}
      
        elevation={0}
        
      >
        
        <Container fixed className={classes.navItems}>
          <ExploreGridItems />
        </Container>
      </Menu>
      <Backdrop
          sx={{
            marginTop: "52px",
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
          onClick={handleClose}
        >
        </Backdrop>
      
    </>
  );
}
