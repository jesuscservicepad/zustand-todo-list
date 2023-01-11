import TaskFooter from "./TaskFooter";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";

const Todo = () => {
  return (
    <section className="todo">
      <TaskHeader />
      <TaskList />
      <TaskFooter />
    </section>
  );
};

export default Todo;
