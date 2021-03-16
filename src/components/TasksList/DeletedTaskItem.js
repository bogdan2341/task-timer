import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
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
}));

function DeletedTaskItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
      <IconButton onClick={props.onDestroy}>
        <CloseIcon color="error" />
      </IconButton>
    </Card>
  );
}

export default DeletedTaskItem;
