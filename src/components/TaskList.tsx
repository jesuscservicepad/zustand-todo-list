import { useTaskStore } from "../store/tasks";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useTaskStore();
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
