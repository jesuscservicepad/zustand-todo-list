import Task from "./Task";
import TaskFooter from "./TaskFooter";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";

const Todo = () => {
  return (
    <section>
      <TaskHeader />
      <TaskList />
      <TaskFooter />
    </section>
  );
};

export default Todo;
