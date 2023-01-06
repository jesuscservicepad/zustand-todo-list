import { Task as TaskInterface, useTaskStore } from "../store/tasks";

interface props {
  task: TaskInterface;
}
const Task: React.FC<props> = ({ task }) => {
  const { remove } = useTaskStore();
  return (
    <li>
      {task.id}--
      {task.text}
      <button
        onClick={() => {
          remove(task.id);
        }}
      >
        -
      </button>
    </li>
  );
};

export default Task;
