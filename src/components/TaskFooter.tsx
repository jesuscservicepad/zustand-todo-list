import { useTaskStore } from "../store/tasks";

const TaskFooter = () => {
  const { tasks, clearAll } = useTaskStore();
  return (
    <>
      <p>You have {tasks.length} pending tasks</p>
      <button
        onClick={() => {
          clearAll();
        }}
        type="button"
      >
        Clear All
      </button>
    </>
  );
};

export default TaskFooter;
