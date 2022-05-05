import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles({
  box: {
    height: "264px",
    width: "912px",
    left: "0px",
    top: "10px",
    borderRadius: "0px",
    backgroundColor: "#F1F6F4",
  },
  heading: {
    fontFamily: "Raleway",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "45px",
    letterSpacing: "0em",
    textAlign: "left",
    paddingTop: "45px",
    paddingLeft: "45px",
  },

  headingbox: {
    height: "90px",
    width: "339px",
    left: "45px",
    top: "45px",
    borderRadius: "nullpx",
  },

  matter: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "23px",
    color: "#6D787E",
    paddingLeft: "45px",
  },
  matterBox: {
    height: "69px",
    width: "461px",
    paddingTop: "60px",
  },
  image: {
    height: "180px",
    marginLeft: "215px",
    marginTop: "45px",
  },
});
const ExploreBooks: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.box}>
        <Grid container direction="column">
          <Grid item>
            <Grid container>
              <Grid item>
                <Grid item className={classes.headingbox}>
                  <Typography className={classes.heading}>
                    Explore Books on entrepreneurship
                  </Typography>
                </Grid>

                <Grid item className={classes.matterBox}>
                  <Typography className={classes.matter}>
                    Everything you need to know about thriving on a shoestring
                    budget, making your first million, and hiring right from the
                    start.
                  </Typography>
                </Grid>
              </Grid>

              <Grid item>
                <img src={"girl.png"} alt="Girl" className={classes.image} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default ExploreBooks;
