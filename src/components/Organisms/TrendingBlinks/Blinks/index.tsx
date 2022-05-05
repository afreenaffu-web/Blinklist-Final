import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { makeStyles } from "@mui/styles";

import BookCard from "../../../molecules/BlinkBookCard/index";

import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";
import { useEffect } from "react";

const useStyles = makeStyles({
  grid: {
    marginTop: "80px",
    paddingRight: "464px",
  },
  heading: {
    height: "30px",
    left: "0px",
    top: "0px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#03314B",
  },
  searchField: {
    marginLeft: "20px",
    marginBottom: "0px",
  },
});

type Book = {
  name: string;
};
type WholeBook = {
  id: React.Key | null | undefined;
  src: string;
  name: string;
  author: string;
  duration: string;
  noOfReads: string;
};
const Blinks: React.FunctionComponent = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [TrendingBlinksData, setTrendingBlinksData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/trending").then((res) => {
      setTrendingBlinksData(res.data);
    });
  }, []);
  const [JustAddedData, setJustAddedData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/just").then((res) => {
      setJustAddedData(res.data);
    });
  }, []);
  const [FeaturedAudioBlinksData, setFeaturedAudioBlinksData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/featured").then((res) => {
      setFeaturedAudioBlinksData(res.data);
    });
  }, []);

  return (
    <>
      <div id="searchbar" style={{ marginTop: "58px" }}>
        <TextField
          id="search"
          label="Search by title or author"
          onChange={(event) => setSearchTerm(event.target.value)}
          style={{ width: "658px" }}
          className={classes.searchField}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon style={{ color: "#3A4649" }} />
              </InputAdornment>
            ),
          }}
        >
          {" "}
        </TextField>
      </div>

      <Grid container className={classes.grid}>
        <Grid item style={{ marginBottom: "25px" }}>
          <Typography className={classes.heading} fontWeight={700}>
            Trending Blinks
          </Typography>
        </Grid>
        <Grid container columnSpacing="200px" rowSpacing="40px">
          {TrendingBlinksData.filter((book: Book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((book: WholeBook) => (
            <Grid key={book.id} item xs={12} sm={6} md={4}>
              {book.src === "2.png" ? (
                <Link to="/bookdetail" style={{ textDecoration: "none" }}>
                  <BookCard
                    key={book.id}
                    image={book.src}
                    bookName={book.name}
                    author={book.author}
                    readTime={book.duration}
                    reads={book.noOfReads}
                    buttonName={"+ Add to Library"}
                    id={0}
                  />
                </Link>
              ) : (
                <BookCard
                  key={book.id}
                  image={book.src}
                  bookName={book.name}
                  author={book.author}
                  readTime={book.duration}
                  reads={book.noOfReads}
                  buttonName={"+ Add to Library"}
                  id={0}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container className={classes.grid}>
        <Grid item style={{ marginBottom: "25px" }}>
          <Typography className={classes.heading} fontWeight={700}>
            Just Added
          </Typography>
        </Grid>
        <Grid container columnSpacing="200px" rowSpacing="40px">
          {JustAddedData.filter((book: Book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((book: WholeBook) => (
            <Grid key={book.id} item xs={12} sm={6} md={4}>
              <BookCard
                key={book.id}
                image={book.src}
                bookName={book.name}
                author={book.author}
                readTime={book.duration}
                reads={book.noOfReads}
                buttonName={"+ Add to Library"}
                id={0}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container className={classes.grid}>
        <Grid item style={{ marginBottom: "25px" }}>
          <Typography className={classes.heading} fontWeight={700}>
            Featured Audio blinks
          </Typography>
        </Grid>
        <Grid container columnSpacing="200px" rowSpacing="40px">
          {FeaturedAudioBlinksData.filter((book: Book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((book: WholeBook) => (
            <Grid key={book.id} item xs={12} sm={6} md={4}>
              <BookCard
                key={book.id}
                image={book.src}
                bookName={book.name}
                author={book.author}
                readTime={book.duration}
                reads={book.noOfReads}
                buttonName={"+ Add to Library"}
                id={0}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Blinks;
