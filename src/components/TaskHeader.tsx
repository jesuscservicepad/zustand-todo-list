import TaskForm from "./TaskForm";

const TaskHeader = () => {
  return (
    <div className="task-header">
      <h1 className="title">Todo App</h1>
      <TaskForm />
    </div>
  );
};

export default TaskHeader;
