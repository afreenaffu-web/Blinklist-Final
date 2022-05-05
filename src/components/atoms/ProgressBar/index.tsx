import { LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  progress: {
    background: "#F1F6F4",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
    top: "38px",
    height: "15px",
    width: "284px",
    left: "0px",
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: "#E1ECFC",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#E1ECFC",
    },
  },
});
const ProgressBar: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <LinearProgress
        variant="determinate"
        value={30}
        className={classes.progress}
      ></LinearProgress>
    </React.Fragment>
  );
};
export default ProgressBar;
