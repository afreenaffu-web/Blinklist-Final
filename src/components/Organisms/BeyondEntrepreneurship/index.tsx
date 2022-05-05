import {
  Button,
  createTheme,
  Grid,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
  StyledEngineProvider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2CE080",
    },
    secondary: {
      main: "#03314B",
    },
  },
});

const useStyles = makeStyles({
  Bookname: {
    position: "absolute",
    width: "496px",
    height: "45px",
    left: "264px",
    top: "206px",
    fontFamily: "Cera pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "35px",
    lineHeight: "45px",
    color: "#03314B",
  },
  caption: {
    position: "absolute",
    width: "509px",
    height: "25px",
    left: "264px",
    top: "275px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#03314B",
  },
  author: {
    position: "absolute",
    width: "209px",
    height: "20px",
    left: "264px",
    top: "324px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#6D787E",
  },
  readtime: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign: "right",
    color: "#6D787E",
  },
  sendtokindle: {
    width: "110px",
    height: "20px",
    left: "0px",
    marginTop: "7px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "20px",
    color: "#6D787E",
  },
  image: {
    position: "absolute",
    width: "304px",
    height: "304px",
    left: "898px",
    top: "206px",
  },
  readnow: {
    position: "static",
    width: "75px",
    height: "20px",
    left: "0px",
    top: "0px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "20px",
  },
  finishedreading: {
    position: "static",
    left: "12.35%",
    right: "12.35%",
    top: "27.27%",
    bottom: "27.27%",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "center",
    color: "#03314B",
  },
  tabname: {
    position: "static",
    height: "20px",
    left: "0px",
    top: "0px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "initial",
    "&.Mui-selected": {
      color: "#03314B",
    },
  },
  info: {
    position: "absolute",
    width: "600px",
    height: "100px",
    left: "264px",
    top: "624px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B",
    marginTop: "20px",
  },
  timeicon: {
    height: "20px",
    width: "20px",
    left: "2px",
    top: "2px",
    borderRadius: "0px",
  },
  arrow: {
    height: "15px",
    color: "#6D787E",
  },
});

const ReadTime: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid container item>
      <Grid item>
        <AccessTimeIcon className={classes.timeicon} />
      </Grid>
      <Grid item style={{ marginLeft: "10px" }}>
        <Typography className={classes.readtime}>15-minute read</Typography>
      </Grid>
    </Grid>
  );
};

const Info: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <Typography className={classes.info} variant="body1">
          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
          Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for
          the entrepreneurs, visionaries, and innovators of today. This new
          edition combines the timeless business advice and strategy of the
          original text, supplemented with cutting-edge insights and case
          studies pertinent to today’s business world.
        </Typography>
      </div>
    </React.Fragment>
  );
};
const Synopsis: React.FunctionComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Tabs
        onChange={handleChange}
        value={value}
        style={{ marginTop: "72px", marginLeft: "264px" }}
      >
        <Tab
          label="Synopsis"
          className={classes.tabname}
          value={0}
          sx={{ width: "200px" }}
        />
        <Tab
          label="Who is it for?"
          className={classes.tabname}
          value={1}
          sx={{ width: "200px" }}
        />
        <Tab
          label="About the author"
          className={classes.tabname}
          value={2}
          sx={{ width: "200px" }}
        />
      </Tabs>

      {value === 0 && <Info />}
    </ThemeProvider>
  );
};
const SendToKindle: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid container item>
      <Grid item sx={{ width: "100px" }}>
        <Typography className={classes.sendtokindle}>Send to Kindle</Typography>
      </Grid>

      <Grid item sx={{ paddingTop: "8px" }}>
        <ArrowForwardIcon className={classes.arrow} />
      </Grid>
    </Grid>
  );
};

const Buttons: React.FunctionComponent = () => {
  const classes = useStyles();
  const [CurrentlyReading, setCurrentlyReading] = useState([]);
  console.log(CurrentlyReading);
  useEffect(() => {
    axios.get("http://localhost:3004/currentlyreading").then((res) => {
      setCurrentlyReading(res.data);
    });
  }, []);
  const [FinishedReading, setFinishedReading] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/finishedreading").then((res) => {
      setFinishedReading(res.data);
    });
  }, []);
  const finish: React.MouseEventHandler<HTMLButtonElement> = (
    _e: React.MouseEvent
  ) => {
    FinishedReading.filter((book: { id: number }) => book.id === 10).length ===
      0 &&
      axios.post("http://localhost:3004/finishedreading", {
        id: 10,
        src: "2.png",
        name: "Beyond Entrepreneurship",
        author: "JimCollins",
        duration: "15-minute read",
        noOfReads: "1.9k reads",
      });
    axios.delete(`http://localhost:3004/currentlyreading/10`).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container columnSpacing="15px">
          <Grid item>
            <Button variant="outlined" style={{ textTransform: "initial" }}>
              <Typography className={classes.readnow}>Read now</Typography>
            </Button>
          </Grid>

          {FinishedReading.filter((book: { id: number }) => book.id === 10)
            .length === 0 && (
            <Grid item>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{ textTransform: "initial" }}
                  onClick={finish}
                >
                  <Typography className={classes.finishedreading}>
                    Finished Reading
                  </Typography>
                </Button>
              </Link>
            </Grid>
          )}
          <Grid item>
            <SendToKindle />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

const BeyondEntrepreneurship: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Grid container>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Grid item>
                    <Typography className={classes.Bookname}>
                      Beyond Entrepreneurship 2.0
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography className={classes.caption}>
                      Turning Your Business into an Enduring Great Company
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography className={classes.author}>
                      By Jim Collins and Bill Lazier
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    style={{ marginTop: "210px", marginLeft: "264px" }}
                  >
                    <ReadTime />
                  </Grid>

                  <Grid item style={{ marginTop: "85px", marginLeft: "264px" }}>
                    <Buttons />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.image}>
              <img src={"2.png"} alt="Beyond Entrepreneurship 2.0"></img>
            </Grid>
          </Grid>

          <Synopsis />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
};
export default BeyondEntrepreneurship;
