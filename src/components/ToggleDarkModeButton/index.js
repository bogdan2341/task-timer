import { IconButton, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Sun from "@material-ui/icons/Brightness5";
import Moon from "@material-ui/icons/Brightness4";
import { toggleDarkMode } from "../../store/settingsReducer/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: theme.spacing(0.5),
    right: theme.spacing(1),
  },
}));

function ToggleDarkModeButton() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isDark = useSelector((store) => store.settings.isDark);
  return (
    <IconButton
      className={classes.root}
      onClick={() => dispatch(toggleDarkMode())}
    >
      {isDark ? <Sun /> : <Moon htmlColor="#fff" />}
    </IconButton>
  );
}

export default ToggleDarkModeButton;
