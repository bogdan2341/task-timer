import { useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import { doneTask } from "../../store/tasksReducer/actions";

function TaskList(props) {
  const dispatch = useDispatch();

  return props.timers.map((el) => (
      <TaskItem
        key={el.id}
        onDone={() => dispatch(doneTask(el.id))}
        isPaused={el.isPaused}
        startingTime={el.startingTime}
        pausingTime={el.pausingTime}
        timerId={el.id}
        title={el.title}
      />
    ))
}

export default TaskList;
