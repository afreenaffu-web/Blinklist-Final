import { Grid, Typography } from "@mui/material";
import React from "react";
import Category from "../../molecules/Category";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CastleOutlinedIcon from "@mui/icons-material/CastleOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    paddingLeft: "15px",
    paddingBottom: "24px",
    fontFamily: "Cera Pro",
  },
  line: {
    borderBottom: "2px solid #042330",
    width: "300px",
  },
  space: {
    paddingTop: "24px",
  },
});

const RecentlyAddedTitles: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Grid item>
            <Grid item>
              <Typography variant="inherit" className={classes.title}>
                See recently added titles
              </Typography>
            </Grid>
            <Grid item className={classes.line}></Grid>
            <Grid item className={classes.space}></Grid>
            <Category
              categoryname="Politics"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<AccountBalanceOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "28px" }}>
            <Category
              categoryname="Health & Nutrition"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<LocalHospitalOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "28px" }}>
            <Category
              categoryname="History"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<CastleOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "28px" }}>
            <Category
              categoryname="Motivation & Inspiration"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<TipsAndUpdatesOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "28px" }}>
            <Category
              categoryname="Productivity"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<HourglassBottomOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "28px" }}>
            <Category
              categoryname="Career & success"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<TrackChangesOutlinedIcon />}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default RecentlyAddedTitles;
