import {
  createTheme,
  StyledEngineProvider,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E1ECFC",
    },
  },
});
const useStyles = makeStyles({
  h1: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "45px",
    marginTop: "49px",
    paddingLeft: "264px",
    paddingBottom: "60px",
  },
});
const Mylibrary = () => {
  const classes = useStyles();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div>
          <Typography variant="h1" className={classes.h1}>
            My Library
          </Typography>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default Mylibrary;
