import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { cardStyle } from "./CardStyle";
import { blinkistTheme } from "../../../theme/blinkistTheme";
import { ThemeProvider } from "@mui/material/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LinearProgress from "@mui/material/LinearProgress";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "@mui/material/Link";
import CustomButton from "../customButton/CustomButton";
interface MediaCardProps {
  title: string;
  author: string;
  image: string;
  readingTime: string;
  userCount: string;
  progress?: number;
  role: string;
  onClick?: () => void;
  testid?:string
}

export default function BookCard(props: MediaCardProps) {
  const classes = cardStyle();
  return (
    <ThemeProvider theme={blinkistTheme}>
      <Card className={classes.bookcard} onClick={props.onClick} data-testid={props.testid}>
        <CardActionArea disableRipple= {true} sx={{padding:"0px"}}>
          <CardMedia
            className={classes.cardmedia}
            component="img"
            image={process.env.PUBLIC_URL + props.image}
            alt={props.title}
          />
          <CardContent>
            <Typography
              sx={{ paddingTop: "7px" }}
              gutterBottom
              variant="subtitle2"
              component="div"
            >
              {props.title}
            </Typography>
            <Typography
              sx={{ paddingTop: "8px" }}
              variant="body2"
              color="text.secondary"
            >
              {props.author}
            </Typography>
            <div className={classes.statusView}>
              <div className={classes.timeStatus}>
                <AccessTimeIcon className={classes.timeIcon} />
                <Typography className={classes.text} variant="caption">
                  {props.readingTime}
                </Typography>
              </div>
              <div className={classes.timeStatus}>
                <PersonOutlineIcon className={classes.userIcon} />
                <Typography className={classes.text} variant="caption">
                  {props.userCount}
                </Typography>
              </div>
            </div>

            {props.role === "currently reading" && (
              <MoreHorizIcon data-testid="current" className={classes.moreicon} />
            )}
            {props.role === "finished" && (
              <Link data-testid="finished"
                sx={{ color: "#0365F2"}}
                className={classes.link}
                underline="hover"
                
              >
                Read Again
              </Link>
            )}
          </CardContent>
        </CardActionArea>

        {props.role !== "explore" && (
          <CardActions  >
            <LinearProgress variant="determinate" value={props.progress} />
          </CardActions>
        )}
        {props.role === "explore" && (
          <CardActions data-testid="explore" >
              <CustomButton variant="text" />
          </CardActions>   
          
        )}
      </Card>
    </ThemeProvider>
  );
}
