import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { blinkistTheme } from "../../../theme/blinkistTheme";
interface TypographyTagProps{
    children:string,
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit"
}
export default function TypographyTag(props:TypographyTagProps){
    return(
        <ThemeProvider theme={blinkistTheme}>
            <Typography variant={props.variant}>{props.children}</Typography>
        </ThemeProvider>
    )
}