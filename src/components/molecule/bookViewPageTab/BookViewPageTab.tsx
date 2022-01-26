import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { blinkistTheme } from "../../../theme/blinkistTheme";
import { ThemeProvider } from "@mui/material/styles";
import { BookViewPageTabsStyle } from "./BookViewPageTabStyle";

interface BookViewPageProps{
    synopsis:string,
    whoIsitFor:string,
    aboutAuthor:string
}

export default function BookViewPageTab(props:BookViewPageProps) {
  const [value, setValue] = React.useState("Synopsis");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const classes = BookViewPageTabsStyle();
  return (
    <ThemeProvider theme={blinkistTheme}>
      <Box sx={{typography: "body2",width:{md:"600px"} }} >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" className={classes.style} variant="fullWidth">
              <Tab label="Synopsis" value="Synopsis" />
              <Tab label="Who is it for?" value="Who is it for?" />
              <Tab label="About the author" value="About the author" />
            </TabList>
          </Box>
          <TabPanel value="Synopsis">{props.synopsis}</TabPanel>
          <TabPanel value="Who is it for?">{props.whoIsitFor}</TabPanel>
          <TabPanel value="About the author">{props.aboutAuthor}</TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
}
