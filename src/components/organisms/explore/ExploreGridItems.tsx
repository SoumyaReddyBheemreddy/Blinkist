import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import TypographyTag from "../../atoms/typography/TypographyTag";
import { AiOutlineRocket } from "react-icons/ai";
import { makeStyles } from "@mui/styles";
import { BiCommentDots } from "react-icons/bi";
import { BsBarChart, BsGraphUp } from "react-icons/bs";
import { FaHistory, FaGlobeAsia, FaHeart, FaLandmark } from "react-icons/fa";
import {
  MdOutlineScience,
  MdOutlineAccountBalanceWallet,
  MdOutlineSchool,
} from "react-icons/md";
import { TiShoppingBag } from "react-icons/ti";
import {
  RiPsychotherapyLine,
  RiLeafLine,
  RiLightbulbFlashLine,
  RiHeartsLine,
} from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
const useStyle = makeStyles({
  button: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Cera Pro",
    fontSize: "16px",
    lineHeight: "20px",
    "&.MuiLink-root":{
      color: "#042330",
    },
    "&:hover": {
      color: "#0365F2",
      "& .MuiTypography-root": {
        color: "#0365F2",
      },
    },
  },
});

export default function ExploreGridItems() {
  const classes = useStyle();
  return (
    <Grid container sx={{ flexWrap: { md: "nowrap", xs: "wrap" } }}>
      <Grid item container direction="column">
        <Grid item>
          <Link className={classes.button} underline="none">
            <AiOutlineRocket
              style={{
                paddingRight: "12px",
                height: "22.05px",
                width: "16px",
              }}
            />
            <TypographyTag variant="body2" children="Entrepreneurship" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <MdOutlineScience
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Science" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <FaGlobeAsia
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Economics" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <TiShoppingBag
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Corporate Culture" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <RiPsychotherapyLine
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Psychology" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <RiLeafLine
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Nature & Environment" />
          </Link>
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <Link className={classes.button} underline="none">
            <FaLandmark
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Politics" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <FaHeart
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Health & Nutrition" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <FaHistory
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="History" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <RiLightbulbFlashLine
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag
              variant="body2"
              children="Motivation & Inspiration"
            />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <GiSandsOfTime
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Productivity" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <FiTarget
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Career & Success" />
          </Link>
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <Link className={classes.button} underline="none">
            <BsGraphUp
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Marketing" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <BsBarChart
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Health & Nutrition" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <BiCommentDots
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="History" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <MdOutlineAccountBalanceWallet
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag
              variant="body2"
              children="Motivation & Inspiration"
            />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <RiHeartsLine
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Productivity" />
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.button} underline="none">
            <MdOutlineSchool
              style={{ paddingRight: "12px", height: "22.05px", width: "16px" }}
            />
            <TypographyTag variant="body2" children="Career & Success" />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
