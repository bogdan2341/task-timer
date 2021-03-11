import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

function TaskItem(props) {
  const classes = useStyles();
  return (
    <Paper onClick={props.onClick} className={classes.root}>
      {props.title + " - " + props.id}
    </Paper>
  );
}

export default TaskItem;
