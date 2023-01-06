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

const state = {
  tasks: [
    {
      id: 1,
      text: "Simple task",
    },
  ],
};

export const useTaskStore = create<TaskState>((set) => ({
  ...state,
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
