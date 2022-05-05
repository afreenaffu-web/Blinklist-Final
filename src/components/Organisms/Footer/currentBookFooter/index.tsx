import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles({
  footer: {
    height: "370px",
    width: "1465px",
    paddingTop: "38px",
    paddingLeft: "220px",
    borderRadius: "0px",
    flexDirection: "column",
    backgroundColor: "#F1F6F4",
  },
  bigideas: {
    width: "328px",
    height: "64px",
    left: "0px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "32px",
    color: "#0365F2",
    flex: "none",
    order: "1",
    flexGrow: "0",
  },
  blinkGrid: {
    width: "378px",
    height: "128px",
  },
  blink: {
    marginTop: "32px",
  },
  blinkImg: {
    height: "26px",
    width: "124px",
  },
  title: {
    position: "static",
    width: "64px",
    height: "24px",
    left: "0px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#03314B",
    flex: "none",
    order: "0",
    flexGrow: "0",
  },
  element: {
    width: "214px",
    height: "24px",
    left: "0px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#6D787E",
    marginTop: "16px",
  },
  blinkHead: {
    paddingTop: "38px",
  },
  titleGrid: {
    width: "284px",
    height: "150px",
  },
  textstyle: {
    position: "static",
    width: "546px",
    height: "22px",
    left: "220px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#6D787E",
    flex: "none",
  },
});

export const Footer: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <Grid container className={classes.footer}>
          <Grid item>
            <Grid container>
              <Grid item className={classes.blinkHead}>
                <Grid container className={classes.blinkGrid} direction="row">
                  <Grid item className={classes.blinkImg}>
                    <img src="Blinklist1.png" alt="Blinklist"></img>
                  </Grid>

                  <Grid className={classes.blink} item>
                    <Typography
                      variant="subtitle1"
                      className={classes.bigideas}
                    >
                      Big ideas in small packages. Start learning now
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container className={classes.titleGrid} direction="row">
                  <Grid container direction="column">
                    <Grid item>
                      <Grid item>
                        <Typography className={classes.title} variant="body1">
                          Editorial
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          Book lists
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          What is Nonfiction?
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          What to read next?
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          Benefits of reading
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container className={classes.titleGrid} direction="row">
                  <Grid container direction="column">
                    <Grid item>
                      <Grid item>
                        <Typography className={classes.title} variant="body1">
                          UsefulLinks
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          Pricing
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          Blinklist Business
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          Gift cards
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          Blinklist Magazine
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          Contact & Help
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container className={classes.titleGrid} direction="row">
                  <Grid container direction="column">
                    <Grid item>
                      <Grid item>
                        <Typography className={classes.title} variant="body1">
                          Company
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          About
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          Careers
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          Partners
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Typography className={classes.element} variant="body2">
                          Code of Conduct
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              marginLeft: "30px",
              marginTop: "78px",
              marginBottom: "38px",
            }}
          >
            <React.Fragment>
              <Typography
                className={classes.textstyle}
                variant="caption"
                fontWeight="400"
              >
                © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
                Policies
              </Typography>
            </React.Fragment>
          </Grid>
        </Grid>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default Footer;
