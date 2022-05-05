import { StyledEngineProvider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "../../Organisms/Headers/currentBookHeader";
import BeyondEntrepreneurship from "../../Organisms/BeyondEntrepreneurship";
import Footer from "../../Organisms/Footer/currentBookFooter";
const useStyles = makeStyles({
  keyideas: {
    position: "absolute",
    height: "20px",
    left: "264px",
    top: "146px",
    fontFamily: "Cera pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B",
  },
});
const BookDetailViewPage: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <div id="appbar">
        <Header />
      </div>

      <div id="keyideas" style={{ marginTop: "60px", marginLeft: "264px" }}>
        <Typography className={classes.keyideas}>
          Get the key ideas from
        </Typography>
      </div>

      <div id="beyond" style={{ marginTop: "40px" }}>
        <BeyondEntrepreneurship />
      </div>

      <div id="footer" style={{ marginTop: "320px" }}>
        <Footer />
      </div>
    </StyledEngineProvider>
  );
};

export default BookDetailViewPage;
