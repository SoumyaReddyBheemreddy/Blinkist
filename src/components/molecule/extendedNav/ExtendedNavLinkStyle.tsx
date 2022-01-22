import { makeStyles } from "@mui/styles";

export const ExtendedNavLinkStyle = makeStyles({
  display: {
    display: "flex",
  },
  icon: {
    "&.MuiSvgIcon-root": {
      left: "16.67%",
      right: "16.67%",
      top: "6.06%",
      bottom: "2.08%",
      width: "16px",
      height: "22.05px",
      marginRight: "12px",
    },
    
  },
  text: {
    "& .MuiTypography-root": {
      position: "static",
      width: "58px",
      height: "20px",
      left: "32px",
      top: "2px",
      verticalAlign: "top",
      fontWeight: "normal",
      lineHeight: "20px",
    },
  },
});
