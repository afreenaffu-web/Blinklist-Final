import { Grid, Typography } from "@mui/material";
import React from "react";
import Category from "../../molecules/Category";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  grid: {
    paddingLeft: "250px",
  },
  exploreCategory: {
    paddingLeft: "15px",
    paddingBottom: "24px",
    fontFamily: "Cera Pro",
    color: "#116BE9",
  },
  line: {
    borderBottom: "2px solid #042330",
    width: "300px",
  },
  space: {
    paddingTop: "24px",
  },
});

const ExploreByCategory: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.grid}>
        <Grid item>
          <Grid item>
            <Typography variant="inherit" className={classes.exploreCategory}>
              Explore By Category
            </Typography>
          </Grid>
          <Grid item className={classes.line}></Grid>
          <Grid item className={classes.space}></Grid>
          <Grid item>
            <Category
              categoryname="Entrepreneurship"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<NotificationsNoneIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "28px" }}>
            <Category
              categoryname="Science"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<ScienceOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "28px" }}>
            <Category
              categoryname="Economics"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<PublicOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "28px" }}>
            <Category
              categoryname="Corporate Culture"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<BusinessCenterOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "28px" }}>
            <Category
              categoryname="Psychology"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<PsychologyOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "28px" }}>
            <Category
              categoryname="Nature & Environment"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<SpaOutlinedIcon />}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default ExploreByCategory;
