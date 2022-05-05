import {
  Button,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme/theme";
import axios from "axios";
import React, { useEffect, useState } from "react";
import time from "../../atoms/Images/time.svg";
import person from "../../atoms/Images/person.svg";
import useStyles from "../../Theme/style";

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
const BookCard: React.FunctionComponent<BookCardProps> = (props) => {
  const classes = useStyles();
  const [CurrentlyReading, setCurrentlyReading] = useState([]);
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
  const handleClick = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    if (props.buttonName === "Finished") {
      const currentBook = CurrentlyReading.filter(
        (book: {
          id: number;
          src: string;
          name: string;
          author: string;
          duration: string;
          noOfReads: string;
        }) => book.id === id
      );
      axios.post(`http://localhost:3004/finishedreading`, ...currentBook);
      const Book = CurrentlyReading.filter(
        (book: { id: number }) => book.id === id
      );

      const index = Book[0]["id"];
      axios.delete(`http://localhost:3004/currentlyreading/${index}`);
      window.location.reload();
      props.incCount();
    } else {
      const finishedBook = FinishedReading.filter(
        (book: {
          id: number;
          src: string;
          name: string;
          author: string;
          duration: string;
          noOfReads: string;
        }) => book.id === props.id
      );
      axios
        .post(`http://localhost:3004/currentlyreading`, ...finishedBook)
        .then((res) => {
          console.log(res.data);
        });
      var BookId = FinishedReading.filter(
        (book: { id: number }) => book.id === props.id
      );

      const index1 = BookId[0]["id"];
      axios
        .delete(`http://localhost:3004/finishedreading/${index1}`)
        .then((res) => {
          console.log(res.data);
        });
      window.location.reload();
      props.incCount();
    }
  };
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
            <div className={classes.readTimeDiv}>
              <div>
                <img src={time} className={classes.time} alt="clock" />
                <Typography variant="caption" className={classes.read}>
                  {props.readTime}
                </Typography>
              </div>
              <div className={classes.readDiv}>
                <img src={person} className={classes.person} alt="person" />
                <Typography variant="caption" className={classes.reads}>
                  {props.reads}
                </Typography>
              </div>
            </div>
          </CardContent>
          <Button
            variant="text"
            onClick={(event) => handleClick(event, props.id)}
            sx={{ padding: "0px" }}
          >
            <Typography variant="body1" className={classes.button}>
              {props.buttonName}
            </Typography>
          </Button>
          <React.Fragment>
            <LinearProgress
              variant="determinate"
              value={100}
              className={classes.progress}
            ></LinearProgress>
          </React.Fragment>
        </Card>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default BookCard;
