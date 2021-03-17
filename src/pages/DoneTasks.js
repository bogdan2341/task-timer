import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import DoneTasksList from "../components/TasksList/DoneTasksList";

function DoneTasks() {
  const doneTasks = useSelector(({tasks}) => tasks.doneTasks);

  return (
    <>
      {doneTasks.length ? (
        <DoneTasksList doneTasks={doneTasks} />
      ) : (
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ marginTop: "3em" }}
        >
          Deleted tasks not exist
        </Typography>
      )}
    </>
  );
}

export default DoneTasks;
