import { useTaskStore } from "../store/tasks";

const TaskFooter = () => {
  const { tasks, clearAll } = useTaskStore();
  return (
    <div className="task-footer">
      <p className="footer-text">You have {tasks.length} pending tasks</p>
      <button
        onClick={() => {
          clearAll();
        }}
        type="button"
        className="task-btn-clear"
      >
        Clear All
      </button>
    </div>
  );
};

export default TaskFooter;
