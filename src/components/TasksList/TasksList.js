import { useDispatch, useSelector } from "react-redux";
import { deleteTimer } from "../../store/actions";
import TaskItem from "./TaskItem";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  text: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

function TaskList() {
  const timers = useSelector((store) => store.timers);
  const dispatch = useDispatch();
  const classes = useStyles();

  return timers.length ? (
    <div className={classes.root}>
      {timers.map((el) => (
        <TaskItem
          key={el.id}
          onRemove={() => dispatch(deleteTimer(el.id))}
          isPaused={el.isPaused}
          startingTime={el.startingTime}
          pausingTime={el.pausingTime}
          timerId={el.id}
          title={el.title}
        />
      ))}
    </div>
  ) : (
    <Typography className={classes.text} variant="body1" color="textSecondary">
      Add new task
    </Typography>
  );
}

export default TaskList;
