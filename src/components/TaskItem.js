import { IconButton, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PlayIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import TaskTimer from "./TaskTimer";
import { useDispatch } from "react-redux";
import { pauseTimer, resumeTimer } from "../redux/actions";
import { indigo } from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: ".2s ease-in",
  },
  paused: {
    color: indigo[200],
    backgroundColor: indigo[50],
    transition: ".2s ease-out",
  },
}));

function TaskItem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onPauseHandler = () => {
    if (props.isPaused) {
      return dispatch(resumeTimer(props.timerId, Date.now()));
    } else {
      return dispatch(pauseTimer(props.timerId, Date.now()));
    }
  };

  return (
    <Paper className={clsx(classes.root, { [classes.paused]: props.isPaused })}>
      {props.title}

      <div>
        <TaskTimer
          startingTime={props.startingTime}
          isPaused={props.isPaused}
          pausingTime={props.pausingTime}
        />
        <IconButton onClick={() => onPauseHandler()}>
          {props.isPaused ? (
            <PlayIcon color="primary" />
          ) : (
            <PauseIcon color="primary" />
          )}
        </IconButton>
        <IconButton onClick={props.onRemove}>
          <CloseIcon color="error" />
        </IconButton>
      </div>
    </Paper>
  );
}

export default TaskItem;
