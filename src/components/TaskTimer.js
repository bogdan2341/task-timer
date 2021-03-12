import { makeStyles } from "@material-ui/core";
import moment from "moment";
import { msToTime } from "../utils/timeUtils";
import { useEffect, useState } from "react";

function TaskTimer(props) {
  const [time, setTime] = useState(0);

  const runTimer = () => {
    setTime(Date.now() - props.startingTime);
  };

  useEffect(() => {
    let timer;
    if (!props.isPaused) {
      timer = setInterval(() => runTimer(), 100);
    } else {
      clearInterval(timer);
      setTime(props.pausingTime - props.startingTime);
    }
    return () => {
      clearInterval(timer);
    };
  }, [props.isPaused]);
  return <span>{msToTime(time)}</span>;
}

export default TaskTimer;
