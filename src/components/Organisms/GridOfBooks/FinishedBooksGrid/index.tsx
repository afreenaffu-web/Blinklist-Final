import { Grid } from "@mui/material";
import React from "react";

import { makeStyles } from "@mui/styles";
import BookCard from "../../../molecules/BookCard";
import axios from "axios";
import { useEffect, useState } from "react";
const useStyles = makeStyles({
  grid: {
    paddingLeft: "264px",
    marginTop: "25px",
    paddingRight: "264px",
    paddingBottom: "254px",
  },
});
interface Props {
  searchTerm: string;
}
const FinishedBooksGrid: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [FinishedReading, setFinishedReading] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/finishedreading").then((res) => {
      setFinishedReading(res.data);
    });
  }, []);
  return (
    <>
      <Grid container className={classes.grid}>
        <Grid container columnSpacing="20px" rowSpacing="40px">
          {FinishedReading.filter((book: { name: string }) =>
            book.name.toLowerCase().includes(props.searchTerm.toLowerCase())
          ).map(
            (book: {
              id: number;
              src: string;
              name: string;
              author: string;
              duration: string;
              noOfReads: string;
            }) => (
              <Grid key={book.id} item xs={12} sm={6} md={4}>
                <BookCard
                  key={book.id}
                  image={book.src}
                  bookName={book.name}
                  author={book.author}
                  readTime={book.duration}
                  reads={book.noOfReads}
                  buttonName={"Read again"}
                  id={book.id}
                  incCount={() => setCount(count + 1)}
                />
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default FinishedBooksGrid;
