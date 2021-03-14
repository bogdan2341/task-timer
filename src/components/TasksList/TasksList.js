import { useDispatch } from "react-redux";
import { deleteTimer } from "../../store/timersReducer/actions";
import TaskItem from "./TaskItem";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

function TaskList(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return props.timers.length ? (
    props.timers.map((el) => (
      <TaskItem
        key={el.id}
        onRemove={() => dispatch(deleteTimer(el.id))}
        isPaused={el.isPaused}
        startingTime={el.startingTime}
        pausingTime={el.pausingTime}
        timerId={el.id}
        title={el.title}
      />
    ))
  ) : (
    <Typography className={classes.text} variant="body1" color="textSecondary">
      Add new task
    </Typography>
  );
}

export default TaskList;
