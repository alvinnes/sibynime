import {
  ListIcon,
  MagnifyingGlassIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";
import useNavbar from "../../stores/useNavbar";

const FeaturesNavbar = () => {
  const isClicked = useNavbar((state) => state.isClicked);
  const setIsClicked = useNavbar((state) => state.setIsClicked);
  const isClickedBtnSearch = useNavbar((state) => state.isClickedBtnSearch);
  const setIsClickedBtnSearch = useNavbar(
    (state) => state.setisclickedBtnSearch,
  );

  return (
    <div className="flex items-center gap-1.5 text-white sm:gap-4">
      <span onClick={() => setIsClickedBtnSearch(!isClickedBtnSearch)}>
        <MagnifyingGlassIcon className="size-5 cursor-pointer sm:hidden sm:size-6" />
      </span>
      <span>
        <UserIcon className="size-5 sm:size-6" />
      </span>
      <span onClick={() => setIsClicked(!isClicked)} className="cursor-pointer">
        {isClicked ? (
          <XIcon className="size-6" />
        ) : (
          <ListIcon className="size-6" />
        )}
      </span>
    </div>
  );
};

export default FeaturesNavbar;
