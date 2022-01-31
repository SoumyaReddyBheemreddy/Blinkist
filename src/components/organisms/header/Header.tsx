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
import Explore from "../explore/Explore";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth0 } from "@auth0/auth0-react";
const useStyle = makeStyles({
  appBar: {
    "& .MuiToolbar-root": {
      paddingLeft: "0px",
    },
  },
});
export default function Header() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container fixed data-testid="header">
      <AppBar
        position="static"
        sx={{ background: "#FFFFFF" }}
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <Logo />

          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="search"
              sx={{ ml: 4, mx: 4, alignSelf: "center", color: " #042330" }}
            >
              <SearchIcon />
            </IconButton>
            <Explore />
            <Link
              href="/"
              sx={{ ml: 4, alignSelf: "center" }}
              underline="hover"
              color=" #042330"
            >
              <TypographyTag children="My Library" variant="body1" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex" } }}>
            {isAuthenticated && <AvatarIcon children="A" />}
            <IconButton
              size="large"
              edge="start"
              aria-label="more"
              sx={{ color: " #042330" }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ExpandMoreIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {isAuthenticated ? (
                <MenuItem onClick={handleClose}>
                  <Link
                    underline="none"
                    component="button"
                    variant="body1"
                    onClick={() => {
                      logout({ returnTo: window.location.origin });
                    }}
                  >
                    Logout
                  </Link>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleClose}>
                  <Link
                    underline="none"
                    component="button"
                    variant="body1"
                    onClick={() => {
                      loginWithRedirect();
                    }}
                  >
                    Log In
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
