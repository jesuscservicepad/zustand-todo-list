import create from "zustand";

export interface Task {
  id: number;
  text: string;
}

interface TaskState {
  tasks: Task[];
  create: (task: Task) => void;
  remove: (id: number) => void;
  clearAll: () => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    {
      id: 1,
      text: "Simple task",
    },
  ],
  taskCompleted: 1,
  create(task) {
    set((state) => ({
      ...state,
      tasks: [...state.tasks, task],
    }));
  },
  remove(id) {
    set((state) => ({
      ...state,
      tasks: state.tasks.filter((task) => task.id != id),
    }));
  },
  clearAll() {
    set((state) => ({
      ...state,
      tasks: [],
    }));
  },
}));
