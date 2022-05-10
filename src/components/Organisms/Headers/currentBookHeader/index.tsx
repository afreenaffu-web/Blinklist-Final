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
import Logout from "../../../atoms/Auth0/Logout";
import { Auth0Provider } from "@auth0/auth0-react";

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
    height: "140px",
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
    lineHeight: "20.11px",
    marginLeft: "150px",
    paddingTop: "33px",
    marginBottom: "33px",
    textTransform: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      borderBottom: "2px solid #2CE080",
    },

    color: "#03314B",
  },
  down: {
    paddingRight: "30px",
    paddingLeft: "10px",
    fontFamily: "Cera pro",
    fontSize: "16px",
    flexDirection: "row",
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
    marginRight: "400px",
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
  explorefont: {
    fontSize: "16px",
    fontFamily: "Cera pro",
  },
  log: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
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
  const [logout, setlogout] = useState(0);
  const handleChange = (
    _e:
      | React.MouseEvent<SVGSVGElement, MouseEvent>
      | React.MouseEvent<HTMLSpanElement>
  ) => {
    value === 0 ? setvalue(1) : setvalue(0);
  };
  const handleLogout = (
    _e:
      | React.MouseEvent<SVGSVGElement, MouseEvent>
      | React.MouseEvent<HTMLSpanElement>
  ) => {
    logout === 0 ? setlogout(1) : setlogout(0);
  };
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppBar className={classes.AppBar}>
          <Toolbar style={{ position: "fixed", backgroundColor: "white" }}>
            {/*Inside the IconButton, we 
           can render various icons*/}
            <img
              src="Blinklist1.png"
              alt="Blinkist"
              className={classes.blinklist}
            ></img>
            <img src="search.png" alt="Search" className={classes.search}></img>

            <IconButton
              disableRipple
              sx={{ width: "10px" }}
              className={classes.down}
              onClick={(e) => handleChange(e)}
            >
              {value === 0 && (
                <Typography className={classes.explore}>
                  <Typography variant="h6" className={classes.explorefont}>
                    Explore
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Typography>
              )}
              {value === 1 && (
                <>
                  <Typography className={classes.explore}>
                    <Typography variant="h6" className={classes.explorefont}>
                      Explore
                    </Typography>{" "}
                    <KeyboardArrowUpIcon />
                  </Typography>
                </>
              )}
            </IconButton>

            <Button
              disableRipple
              className={classes.library}
              onClick={handleClick}
            >
              <Typography className={classes.lib}>My Library</Typography>
            </Button>
            <Avatar className={classes.avatar}>A</Avatar>

            {logout === 0 ? (
              <IconButton
                disableRipple
                className={classes.down}
                onClick={(e) => handleLogout(e)}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            ) : (
              <div className={classes.log}>
                <IconButton
                  disableRipple
                  className={classes.down}
                  onClick={(e) => handleLogout(e)}
                >
                  {logout === 0 && <KeyboardArrowDownIcon />}
                  {logout === 1 && <KeyboardArrowUpIcon />}
                </IconButton>
                {logout === 1 && (
                  <Auth0Provider
                    domain="dev-t7uorqjf.us.auth0.com"
                    clientId="z9RHu4Q5iMvflXI76MJ52KgbgWnLjNwG"
                    redirectUri="http://localhost:3000"
                  >
                    <Logout />
                  </Auth0Provider>
                )}
              </div>
            )}
          </Toolbar>
          {value === 1 && <Explore />}
        </AppBar>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default Header;
