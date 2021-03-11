import { makeStyles } from "@material-ui/core";
import moment from "moment";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
  },
}));

const msToTime = (ms) => {
  let h = moment.duration(ms).hours();
  let m = moment.duration(ms).minutes();
  let s = moment.duration(ms).seconds();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  return `${h}:${m}:${s}`;
};

function TaskTimer(props) {
  const classes = useStyles();
  const [time, setTime] = useState(0);
  const startTime = Date.now();

  const runTimer = () => {
    setTime(Date.now() - startTime);
  };

  useEffect(() => {
    const timer = setInterval(() => runTimer(), 100);
    return () => {
      console.log("Clear", timer);

      clearInterval(timer);
    };
  }, []);
  return <div className={classes.root}>{msToTime(time)}</div>;
}

export default TaskTimer;
