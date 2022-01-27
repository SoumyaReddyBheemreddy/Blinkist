import { createTheme } from "@mui/material/styles";

export const blinkistTheme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
    secondary: {
      main: "#0365F2",
    },
  },
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
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "24px",
    },
    body1: {
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
      fontWeight: "bold",
      color: "#6D787E",
    },
    caption: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "18px",
      verticalAlign: "top",
      color: "#6D787E",
    },
    button: {
      textTransform: "none",
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
    MuiButton: {
      styleOverrides: {
        root: {
          position: "absolute",
          left: "0",
          bottom: "0",
          width: "100%",
          fontSize: "16px",
          boxSizing: "border-box",
          padding: "10px 24px",
          borderRadius: "0px 0px 8px 8px",
          borderTop: "2px solid #E1ECFC",
        },
        text: {
          "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#0365F2",
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          color: "#6D787E",
          
        },

        textColorPrimary: {
          "&:hover": {
            color: "#20BA68",
          },
        },
      },
    },
  },
});
