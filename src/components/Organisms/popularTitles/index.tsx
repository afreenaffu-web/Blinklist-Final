import { Grid, Typography } from "@mui/material";
import React from "react";
import Category from "../../molecules/Category";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    paddingLeft: "15px",
    paddingBottom: "24px",
    fontFamily: "Cera Pro",
  },
  line: {
    borderBottom: "2px solid #042330",
    width: "250px",
  },
  space: {
    paddingTop: "24px",
  },
  categoryStyle: {
    ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
  },
});
const PopularTitles: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Grid item>
            <Grid item>
              <Typography variant="inherit" className={classes.title}>
                See popular titles
              </Typography>
            </Grid>
            <Grid item className={classes.line}></Grid>
            <Grid item className={classes.space}></Grid>
            <Category
              categoryname="Marketing & Sales"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<ShowChartOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "20px" }}>
            <Category
              categoryname="Personal Development"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<BarChartOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "20px" }}>
            <Category
              categoryname="Communication Skills"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<CommentOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "20px" }}>
            <Category
              categoryname="Money & Investments"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<AccountBalanceWalletOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "20px" }}>
            <Category
              categoryname="Sex & Relationship"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<FavoriteBorderOutlinedIcon />}
            />
          </Grid>

          <Grid item style={{ marginTop: "20px" }}>
            <Category
              categoryname="Education"
              sx={{
                ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" },
              }}
              icon={<SchoolOutlinedIcon />}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default PopularTitles;
