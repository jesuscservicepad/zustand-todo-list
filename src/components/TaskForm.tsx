import { useState } from "react";
import { useTaskStore } from "../store/tasks";

const TaskForm = () => {
  const { create } = useTaskStore();
  const [task, setTask] = useState("");
  const handleAdd = () => {
    create({
      id: new Date().getTime(),
      text: task,
    });
    setTask("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="Add your new todo"
        value={task}
        onChange={(ev) => {
          setTask(ev.target.value);
        }}
      />
      <button onClick={handleAdd} type="button">
        +
      </button>
    </>
  );
};

export default TaskForm;
