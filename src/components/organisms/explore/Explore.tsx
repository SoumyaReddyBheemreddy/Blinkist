import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import TypographyTag from "../../atoms/typography/TypographyTag";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import { Link } from "@mui/material";
import Menu from "@mui/material/Menu";
import ExploreGridItems from "./ExploreGridItems";
import { Container } from "@mui/material";
const useStyle = makeStyles({
  button: {
    display: "flex",
    alignItems: "center",
    color: "#03314B",
    textTransform: "none",
    "&:hover": {
      borderBottom: "1px solid #2CE080",
    },
  },
  menu:{
    "& .MuiPaper-root": {
      backgroundColor: "#F1F6F4"
    }
  },
  navItems:{
    padding:"32px 0px",
  }
});

export default function Explore() {
  const [isDown, setIsDown] = useState(true);
  const handleIcon = () => {
    setIsDown(!isDown);
  };
  const handlingBothFunctions = (event: any) => {
    if (!isDown) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
    handleIcon();
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const classes = useStyle();
  return (
    <>
      <Link
        className={classes.button}
        underline="none"
        onClick={handlingBothFunctions}
        sx={{ borderBottom: isDown ? "none" : "1px solid #2CE080" }}
      >
        <TypographyTag variant="body1" children="Explore" />
        <IconButton>
          {isDown ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </IconButton>
      </Link>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(!isDown)}
        onClose={handlingBothFunctions}
        PaperProps={{
          style: {
            width: "100%",
          },
        }}
        className={classes.menu}
      >
        <Container fixed className={classes.navItems}>
          <ExploreGridItems />
        </Container>
      </Menu>
    </>
  );
}
