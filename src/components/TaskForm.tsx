import { useState } from "react";
import { useTaskStore } from "../store/tasks";

const TaskForm = () => {
  const { create } = useTaskStore();
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (!task) return;
    create({
      id: new Date().getTime(),
      text: task,
    });
    setTask("");
  };
  return (
    <div className="task-form">
      <input
        type="text"
        className="task-input"
        placeholder="Add your new todo"
        value={task}
        onChange={(ev) => {
          setTask(ev.target.value);
        }}
      />
      <button onClick={handleAdd} type="button" className="task-btn-add">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TaskForm;
