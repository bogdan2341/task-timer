import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import TaskInput from "../components/TaskInput";
import TasksList from "../components/TasksList";

function CurrentTasksTimers() {
  const currentTasks = useSelector(({tasks}) => tasks.currentTasks);

  return (
    <>
      <TaskInput />
      {currentTasks.length ? (
        <TasksList timers={currentTasks} />
      ) : (
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ marginTop: "3em" }}
        >
          Add new task
        </Typography>
      )}
    </>
  );
}

export default CurrentTasksTimers;
