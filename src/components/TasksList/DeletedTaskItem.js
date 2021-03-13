import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import clsx from "clsx";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    transition: ".2s ease-in",
  },
  paused: {
    color: theme.palette.action.disabled,
    backgroundColor: theme.palette.action.disabledBackground,
    transition: ".2s ease-out",
  },
}));

function DeletedTaskItem(props) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, { [classes.paused]: props.isPaused })}>
      <CardContent>
        <Typography color="textSecondary" variant="body2" gutterBottom>
          {moment.duration(-(Date.now() - props.deletingTime)).humanize(true)}
        </Typography>
        <Typography variant="body1">{props.title}</Typography>
      </CardContent>

      <div>
        <IconButton onClick={props.onDestroy}>
          <RemoveIcon color="error" />
        </IconButton>
      </div>
    </Card>
  );
}

export default DeletedTaskItem;
