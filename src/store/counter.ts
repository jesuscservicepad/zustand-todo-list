import create from "zustand";

interface CounterState {
  count: number;
  posts: any[];
  increment: (value: number) => void;
  getPost: () => void;
  clearPost: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 10,
  posts: [],
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),
  getPost: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    set((state) => ({
      ...state,
      posts: posts,
    }));
  },
  clearPost: () => {
    set((state) => ({
      ...state,
      posts: [],
    }));
  },
}));
