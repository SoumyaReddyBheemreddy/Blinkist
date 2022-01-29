import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ThemeProvider } from "@mui/material/styles";
import { blinkistTheme } from "../../../theme/blinkistTheme";
import { ListTabsStyle } from "./ListTabsStyle";
interface ListTabsProps {
  stateHandler? : (arg:string)=>void
}
export default function ListTabs(props: ListTabsProps) {
  const [value, setValue] = React.useState("currently reading");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    props.stateHandler && props.stateHandler(newValue);
  };
  const classes = ListTabsStyle();
  return (
    <ThemeProvider theme={blinkistTheme}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", justifyContent:"" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          className={classes.style}
        >
          <Tab value="currently reading" label="Currently reading" />
          <Tab value="finished" label="Finished" />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
