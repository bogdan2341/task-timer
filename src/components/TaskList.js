import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTimer } from "../redux/actions";

export default function () {
  const timers = useSelector((store) => store.timers);
  const dispatch = useDispatch();

  return (
    <ul>
      {timers.map((el, i) => (
        <li key={el.id} onClick={() => dispatch(deleteTimer(el.id))}>
          {el.title} - {el.id}
        </li>
      ))}
    </ul>
  );
}
