import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import moment from "moment";
import { msToTime } from "../../utils/timeUtils";

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
}));

function DoneTaskItem(props) {
  const classes = useStyles();
  let workTime;
  if (props.isPaused) {
    workTime = props.pausingTime - props.startingTime;
  } else {
    workTime = props.doneTime - props.startingTime;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" variant="body2" gutterBottom>
          Done{" "}
          {moment.duration(-(Date.now() - props.doneTime)).humanize(true)}
        </Typography>
        <Typography variant="body1">{props.title}</Typography>
        <Typography color="textSecondary" variant="body2" gutterBottom>
          {msToTime(workTime)}
        </Typography>
      </CardContent>
      <IconButton onClick={props.onDelete}>
        <CloseIcon color="error" />
      </IconButton>
    </Card>
  );
}

export default DoneTaskItem;
