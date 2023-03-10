import { Task as TaskInterface, useTaskStore } from "../store/tasks";

interface Props {
  task: TaskInterface;
}
const Task: React.FC<Props> = ({ task }) => {
  const { remove } = useTaskStore();
  return (
    <li id={`task-${task.id}`} className="task">
      <span className="task-text">{task.text}</span>
      <button
        onClick={() => {
          remove(task.id);
        }}
        className="task-btn-remove"
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default Task;
