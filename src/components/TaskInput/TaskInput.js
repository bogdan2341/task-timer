import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTimer } from "../../store/timersReducer/actions";
import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";

const genUID = () => Math.random().toString(36).substr(2, 9);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },
  textField: {
    flexGrow: 2,
    marginRight: theme.spacing(1),
  },
}));

function InputNewTask() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      saveTimerHandler();
    }
  };

  const saveTimerHandler = () => {
    const taskTitle = title || `Task#[${moment().format("HH:mm:ss")}]`;
    setTitle("");
    return dispatch(addTimer(genUID(), taskTitle, Date.now()));
  };

  return (
    <Paper className={classes.root}>
      <TextField
        variant="outlined"
        className={classes.textField}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        label="Task title"
        onKeyPress={keyDownHandler}
      />
      <Button onClick={saveTimerHandler} variant="contained" color="primary">
        <AddIcon />
      </Button>
    </Paper>
  );
}

export default InputNewTask;
