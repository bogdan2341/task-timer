import { useDispatch } from "react-redux";
import { deleteDoneTask } from "../../store/tasksReducer/actions";
import DoneTaskItem from "./DoneTaskItem";

function DoneTasksList(props) {
  const dispatch = useDispatch();

  return props.doneTasks.map((el) => (
      <DoneTaskItem
        key={el.id}
        onDelete={() => dispatch(deleteDoneTask(el.id))}
        startingTime={el.startingTime}
        doneTime={el.doneTime}
        pausingTime={el.pausingTime}
        isPaused={el.isPaused}
        timerId={el.id}
        title={el.title}
      />
    ))
}

export default DoneTasksList;
