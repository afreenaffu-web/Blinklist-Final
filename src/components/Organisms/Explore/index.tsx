import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ExploreByCategory from "../ExploreByCategory";
import RecentlyAddedTitles from "../RecentTitles";
import PopularTitles from "../popularTitles";

const useStyles = makeStyles({
  grid: {
    borderRadius: "0px",
    width: "1485px",
    paddingBottom: "32px",
    backgroundColor: "#F1F6F4",
    zIndex: 1,
  },
  explore: {
    marginTop: "32px",
  },
  box: {
    height: "1785px",
    width: "1500px",
    backgroundColor: "#9DA3A673",
    zIndex: 1,
  },
});

const ExploreCategories: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.grid}>
        <Grid item className={classes.explore}>
          {" "}
          <ExploreByCategory />{" "}
        </Grid>

        <Grid item style={{ marginTop: "32px" }}>
          {" "}
          <RecentlyAddedTitles />{" "}
        </Grid>

        <Grid item style={{ marginTop: "32px" }}>
          {" "}
          <PopularTitles />{" "}
        </Grid>
      </Grid>
      <Grid container sx={{ width: "1464px" }}>
        <Grid item className={classes.box}></Grid>
      </Grid>
    </>
  );
};

export default ExploreCategories;
