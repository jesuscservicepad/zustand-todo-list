import React, { useState } from "react";
import { useTaskStore } from "../store/tasks";

const TaskForm = () => {
  const { create } = useTaskStore();
  const [task, setTask] = useState("");

  const handdleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!task) return;
    create({
      id: new Date().getTime(),
      text: task,
    });
    setTask("");
  };
  return (
    <form onSubmit={handdleSubmit} className="task-form">
      <input
        type="text"
        className="task-input"
        placeholder="Add your new todo"
        value={task}
        onChange={(ev) => {
          setTask(ev.target.value);
        }}
      />
      <button type="submit" className="task-btn-add">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default TaskForm;
