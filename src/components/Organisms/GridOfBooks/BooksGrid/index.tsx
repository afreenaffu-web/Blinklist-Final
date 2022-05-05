import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import BookCard from "../../../molecules/BookCard";
import axios from "axios";

const useStyles = makeStyles({
  grid: {
    paddingLeft: "264px",
    marginTop: "25px",
    paddingRight: "264px",
    paddingBottom: "111px",
  },
});

interface BooksGridProps {
  searchTerm: string;
}

const BooksGrid: React.FunctionComponent<BooksGridProps> = ({ searchTerm }) => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [CurrentlyReading, setCurrentlyReading] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/currentlyreading").then((res) => {
      setCurrentlyReading(res.data);
    });
  }, []);

  if (!CurrentlyReading) return null;
  return (
    <>
      <Grid container className={classes.grid}>
        <Grid container columnSpacing="20px" rowSpacing="40px">
          {CurrentlyReading.filter((book: { name: string }) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                  buttonName="Finished"
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

export default BooksGrid;
