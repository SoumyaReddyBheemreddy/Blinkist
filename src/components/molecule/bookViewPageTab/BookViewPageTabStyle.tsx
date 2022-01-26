import { makeStyles } from "@mui/styles";

export const BookViewPageTabsStyle = makeStyles({
  style: {
    "& .MuiTab-root": {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "16px",
      padding: "16px",
      alignItems: "flex-start",
      "&:hover": {
        color: "#03314B",
      },
      "&.Mui-selected": {
        color: "#03314B",
      },
    },
  },
});
