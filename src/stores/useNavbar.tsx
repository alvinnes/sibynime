import { create } from "zustand";

interface State {
  isClicked: boolean;
  setIsClicked: (condition: boolean) => void;
}

const useNavbar = create<State>((set) => ({
  isClicked: false,
  setIsClicked: (condition: boolean) =>
    set((state) => ({ isClicked: (state.isClicked = condition) })),
}));

export default useNavbar;
