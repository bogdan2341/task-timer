import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import DeletedTasksList from "../components/TasksList/DeletedTasksList";

function DeletedTasks() {
  const deletedTimers = useSelector((store) => store.timersStore.deletedTimers);

  return (
    <>
      {deletedTimers.length ? (
        <DeletedTasksList deletedTimers={deletedTimers} />
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

export default DeletedTasks;
