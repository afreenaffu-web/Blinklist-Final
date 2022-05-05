import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  createTheme,
  IconButton,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState } from "react";
import Explore from "../../Explore";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});
const useStyles = makeStyles({
  AppBar: {
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    width: "1440px",
    height: "86px",
    position: "relative",
  },
  blinklist: {
    paddingLeft: "250px",
    paddingTop: "30px",
    paddingBottom: "30px",
  },
  search: {
    top: "2px",
    left: "2px",
    width: "20.31px",
    height: "20.31px",
    paddingLeft: "42.91px",
    paddingTop: "33px",
    paddingBottom: "32.69px",
  },
  explore: {
    fontSize: "16px",
    lineHeight: "20.11px",
    fontFamily: "Cera Pro",
    marginLeft: "150px",
    paddingTop: "33px",
    marginBottom: "33px",
    textTransform: "none",
    "&:hover": {
      borderBottom: "2px solid #2CE080",
    },
    color: "#03314B",
  },
  down: {
    paddingRight: "30px",
    paddingLeft: "0px",

    width: "10px",
    "&:hover": {
      background: "none",
    },
  },
  library: {
    fontSize: "16px",
    lineHeight: "20.11px",
    fontFamily: "Cera Pro",
    marginLeft: "100px",
    marginTop: "33px",
    marginBottom: "33px",
    marginRight: "456px",
    textTransform: "none",
    "&:hover": {
      background: "none",
    },
    color: "#03314B",
  },
  avatar: {
    backgroundColor: "#69A6E3",
    Font: "Inter",
    width: "40px",
    height: "40px",
  },
  lib: {
    fontFamily: "Cera Pro",
    "&:hover": {
      borderBottom: "2px solid #2CE080",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const [value, setvalue] = useState(0);
  const handleChange = (
    e:
      | React.MouseEvent<SVGSVGElement, MouseEvent>
      | React.MouseEvent<HTMLSpanElement>
  ) => {
    value === 0 ? setvalue(1) : setvalue(0);
  };

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppBar position="static" className={classes.AppBar}>
          <Toolbar>
            {/*Inside the IconButton, we 
           can render various icons*/}
            <img
              src="Blinklist1.png"
              alt="Blinkist"
              className={classes.blinklist}
            ></img>
            <img src="search.png" alt="Search" className={classes.search}></img>

            <Button
              disableRipple
              endIcon={
                <IconButton disableRipple sx={{ width: "10px" }}>
                  {value === 0 && (
                    <Typography className={classes.lib}>
                      <KeyboardArrowDownIcon />
                    </Typography>
                  )}
                  {value === 1 && (
                    <>
                      <Typography className={classes.lib}>
                        {" "}
                        <KeyboardArrowUpIcon />
                      </Typography>
                    </>
                  )}
                </IconButton>
              }
              variant="text"
              className={classes.down}
              onClick={(e) => handleChange(e)}
            >
              <Typography variant="h6" className={classes.explore}>
                Explore
              </Typography>
            </Button>
            <Button
              disableRipple
              className={classes.library}
              onClick={handleClick}
            >
              <Typography className={classes.lib}>My Library</Typography>
            </Button>
            <Avatar className={classes.avatar}>A</Avatar>
            <Button
              disableRipple
              startIcon={
                <IconButton disableRipple>
                  <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                </IconButton>
              }
              variant="text"
              className={classes.down}
            ></Button>
          </Toolbar>
          {value === 1 && <Explore />}
        </AppBar>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default Header;
