import { Paper, Typography, makeStyles } from "@material-ui/core";
import { blue, indigo } from "@material-ui/core/colors";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimers } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "560px",
    textAlign: "center",
    margin: "auto",
    marginTop: theme.spacing(2),
  },
  logo: {
    color: indigo[500],
    fontWeight: "bold",
  },
}));

function MainLayout({ children }) {
  const timers = useSelector((store) => store.timers);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const timers = JSON.parse(localStorage.getItem("timers"));
    if (timers && timers.length) {
      dispatch(setTimers(timers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(timers));
  }, [timers]);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.logo}>
        Tracker
      </Typography>
      <Paper>{children}</Paper>
    </div>
  );
}

export default MainLayout;
