import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTimer } from "../redux/actions";

const genUID = () => Math.random().toString(36).substr(2, 9);

export default function () {
  const [tittle, setTittle] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTittle(e.target.value)}
        value={tittle}
      />
      <button onClick={() => dispatch(addTimer(genUID(), tittle, 2323))}>
        Add task
      </button>
    </div>
  );
}
