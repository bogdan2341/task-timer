import { useDispatch } from "react-redux";
import { destroyDeletedTimers } from "../../store/timersReducer/actions";
import { makeStyles, Typography } from "@material-ui/core";
import DeletedTaskItem from "./DeletedTaskItem";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

function DeletedTasksList(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return props.deletedTimers.length ? (
    props.deletedTimers.map((el) => (
      <DeletedTaskItem
        key={el.id}
        onDestroy={() => dispatch(destroyDeletedTimers(el.id))}
        startingTime={el.startingTime}
        deletingTime={el.deletingTime}
        pausingTime={el.pausingTime}
        isPaused={el.isPaused}
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

export default DeletedTasksList;
