import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTimer } from "../redux/actions";
import { Button, makeStyles, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";

const genUID = () => Math.random().toString(36).substr(2, 9);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
  },
  textField: {
    flexGrow: 2,
    marginRight: theme.spacing(1),
  },
}));

function InputNewTask() {
  const [tittle, setTittle] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      saveTimerHandler();
    }
  };

  const saveTimerHandler = () => {
    const taskTittle = tittle || `Task#[${moment().format("HH:mm:ss")}]`;
    setTittle("");
    return dispatch(addTimer(genUID(), taskTittle, Date.now()));
  };

  return (
    <div className={classes.root}>
      <TextField
        variant="outlined"
        className={classes.textField}
        type="text"
        onChange={(e) => setTittle(e.target.value)}
        value={tittle}
        label="Task title"
        onKeyPress={keyDownHandler}
      />
      <Button onClick={saveTimerHandler} variant="contained" color="primary">
        <AddIcon />
      </Button>
    </div>
  );
}

export default InputNewTask;
