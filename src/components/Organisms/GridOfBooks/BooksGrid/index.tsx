import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BookCard from "../../../molecules/BookCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
          {CurrentlyReading.filter((currentbook: { name: string }) =>
            currentbook.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map(
            (currentbook: {
              id: number;
              author: string;
              duration: string;
              src: string;
              name: string;
              noOfReads: string;
            }) => (
              <Grid key={currentbook.id} item xs={12} sm={6} md={4}>
                <BookCard
                  key={currentbook.id}
                  author={currentbook.author}
                  readTime={currentbook.duration}
                  image={currentbook.src}
                  bookName={currentbook.name}
                  reads={currentbook.noOfReads}
                  buttonName="Finished"
                  id={currentbook.id}
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
