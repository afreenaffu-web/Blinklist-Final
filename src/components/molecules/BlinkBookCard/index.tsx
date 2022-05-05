import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme/theme";

import time from "../../atoms/Images/time.svg";
import person from "../../atoms/Images/person.svg";

const useStyles = makeStyles({
  bookName: {
    color: "#03314B",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "23px",
    top: "23px",
  },
  card: {
    background: "#FFFFFF",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "8px",
    width: "284px",
    height: "466px",
  },
  author: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    paddingTop: "16px",
    color: "#6D787E",
    height: "20px",
  },
  read: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6D787E",
    paddingTop: "17px",
    paddingLeft: "5.67px",
  },
  reads: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign: "right",
    color: "#6D787E",
    height: "18px",
    width: "64px",
    left: "24px",
    top: "1px",
    borderRadius: "nullpx",
    paddingLeft: "1px",
  },
  time: {
    height: "13.67px",
    width: "16.67px",
    left: "1.67px",
    borderRadius: "0px",
    paddingTop: "17.67px",
    paddingRight: "5.67",
  },
  person: {
    height: "13.5px",
    width: "13.33px",
    left: "3.33px",
    top: "3px",
    borderRadius: "0px",
    paddingLeft: "47.33px",
  },

  content: {
    padding: 12,
  },

  addButton: {
    width: "284px",
    height: "52px",
    color: "#0365F2",
    border: "1px solid #E1ECFC",
    "&:hover": {
      background: "#0365F2",
      color: "#FFFFFF",
    },
  },
});

interface BookCardProps {
  bookName: string;
  author: string;
  readTime: string;
  reads: string;
  image: string;
  children?: any;
  buttonName: string;
  id: number;
  incCount?: any;
}
const BlinkBookCard: React.FunctionComponent<BookCardProps> = (props) => {
  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Card variant="outlined" className={classes.card}>
          <CardMedia component="img" image={props.image} height="292" />
          <CardContent className={classes.content}>
            <Typography variant="subtitle1" className={classes.bookName}>
              {props.bookName}
            </Typography>
            <Typography className={classes.author}>{props.author}</Typography>
            <div style={{ display: "flex" }}>
              <div>
                <img src={time} className={classes.time} alt="clock" />
                <Typography variant="caption" className={classes.read}>
                  {props.readTime}
                </Typography>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <img src={person} className={classes.person} alt="person" />
                <Typography variant="caption" className={classes.reads}>
                  {props.reads}
                </Typography>
              </div>
            </div>
          </CardContent>
          <Button variant="text" className={classes.addButton}>
            {props.buttonName}
          </Button>
        </Card>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default BlinkBookCard;
