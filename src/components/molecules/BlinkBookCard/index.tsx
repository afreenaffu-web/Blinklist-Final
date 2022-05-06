import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme/theme";
import time from "../../atoms/Images/time.svg";
import person from "../../atoms/Images/person.svg";
import useStyles from "../../Theme/useStyles";

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
          <Button variant="text" className={classes.addbutton}>
            {props.buttonName}
          </Button>
        </Card>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default BlinkBookCard;
