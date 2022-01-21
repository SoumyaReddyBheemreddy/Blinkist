import { createTheme } from "@mui/material/styles";

export const blinkistTheme = createTheme({
  typography: {
    h1: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: "700",
    },
    subtitle1: {
      /* Subtitle 1 */

      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "32px",
      /* identical to box height */

      /* Text/high_emphasis */

      color: "#03314B",
    },
    subtitle2: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "32px",
    },
    body1:{
        fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontFamily: "Cera Pro",
      fontSize: "16px",
      lineHeight: "24px",
      fontStyle: "normal",
      fontWeight: "400",
      color: "#6D787E",
    },
    caption: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
      verticalAlign: "top",
      color: "#6D787E",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          position: "absolute",
          left: "0",
          bottom: "0",
          width: "100%",
          height: "15px",

          boxSizing: "border-box",

          borderRadius: "0px 0px 8px 8px",
          background: "#F1F6F4",
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#E1ECFC",
          },
        },
      },
    },
  },
});
