import { create } from "zustand";

interface State {
  isLoading: boolean;
  setIsLoading: (condition: boolean) => void;
}

const useIsLoading = create<State>((set) => ({
  isLoading: false,
  setIsLoading: (condition: boolean) =>
    set((state) => ({ isLoading: (state.isLoading = condition) })),
}));

export default useIsLoading;
