import create from "zustand";
import { persist } from "zustand/middleware";

export interface Task {
  id: number;
  text: string;
}

interface State {
  tasks: Task[];
}

interface Actions {
  create: (task: Task) => void;
  remove: (id: number) => void;
  clearAll: () => void;
}

export const useTaskStore = create(
  persist<State & Actions>(
    (set) => ({
      tasks: [],
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
    }),
    {
      name: "task",
    }
  )
);
