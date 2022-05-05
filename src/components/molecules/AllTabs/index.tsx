import {
  createTheme,
  StyledEngineProvider,
  Tab,
  Tabs,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import BooksGrid from "../../Organisms/GridOfBooks/BooksGrid";
import FinishedBooksGrid from "../../Organisms/GridOfBooks/FinishedBooksGrid";

import Mylibrary from "../../atoms/MyLibrary";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});

const useStyles = makeStyles({
  tabName: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "23px",
    textTransform: "initial",
    width: "304px",
  },
});

interface Props {
  searchTerm: string;
}

const AllTabs: React.FunctionComponent<Props> = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Mylibrary />
        <Tabs
          onChange={handleChange}
          value={value}
          style={{ paddingLeft: "264px" }}
        >
          <Tab
            label="Currently Reading"
            color="primary"
            className={classes.tabName}
            value={0}
            disableRipple
          />
          <Tab
            label="Finished"
            color="primary"
            className={classes.tabName}
            value={1}
            disableRipple
          />
        </Tabs>
      </ThemeProvider>

      {value === 0 && <BooksGrid searchTerm={props.searchTerm} />}

      {value === 1 && <FinishedBooksGrid searchTerm={props.searchTerm} />}
    </StyledEngineProvider>
  );
};

export default AllTabs;
