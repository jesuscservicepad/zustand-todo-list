import TaskForm from "./TaskForm";

const TaskHeader = () => {
  return (
    <div className="task-header">
      <h1 className="title">Todo List</h1>
      <TaskForm />
    </div>
  );
};

export default TaskHeader;
