import { IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import PlayIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import TaskTimer from "./TaskTimer";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { pauseTask, resumeTask } from "../../store/tasksReducer/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: ".2s ease-in",
  },
  paused: {
    color: theme.palette.action.disabled,
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey["A700"]
        : theme.palette.grey[100],
    transition: ".2s ease-out",
  },
}));

function TaskItem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onPauseHandler = () => {
    if (props.isPaused) {
      return dispatch(resumeTask(props.timerId, Date.now()));
    } else {
      return dispatch(pauseTask(props.timerId, Date.now()));
    }
  };

  return (
    <Paper className={clsx(classes.root, { [classes.paused]: props.isPaused })}>
      <Typography variant="body1">{props.title}</Typography>
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
        <IconButton onClick={props.onDone}>
          <DoneIcon color="primary" />
        </IconButton>
      </div>
    </Paper>
  );
}

export default TaskItem;
