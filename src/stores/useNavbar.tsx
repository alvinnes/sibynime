import { create } from "zustand";

interface State {
  isClicked: boolean;
  isClickedBtnSearch: boolean;
  setIsClicked: (condition: boolean) => void;
  setisclickedBtnSearch: (condition: boolean) => void;
}

const useNavbar = create<State>((set) => ({
  isClicked: false,
  isClickedBtnSearch: false,
  setIsClicked: (condition: boolean) =>
    set((state) => ({ isClicked: (state.isClicked = condition) })),
  setisclickedBtnSearch: (condition: boolean) =>
    set((state) => ({
      isClickedBtnSearch: (state.isClickedBtnSearch = condition),
    })),
}));

export default useNavbar;
