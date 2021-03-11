import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTimer } from "../redux/actions";
import { Button, makeStyles, TextField } from "@material-ui/core";

const genUID = () => Math.random().toString(36).substr(2, 9);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },
  textField: {
    width: "60%",
  },
}));

function InputNewTask() {
  const [tittle, setTittle] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        type="text"
        onChange={(e) => setTittle(e.target.value)}
        value={tittle}
        label="Task title"
      />
      <Button
        onClick={() => dispatch(addTimer(genUID(), tittle, 2323))}
        variant="outlined"
        color="primary"
      >
        Add task
      </Button>
    </div>
  );
}

export default InputNewTask;
