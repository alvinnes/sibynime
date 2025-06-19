import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import useNavbar from "../../stores/useNavbar";

const SearchInput = () => {
  const isClickedBtnSearch = useNavbar((state) => state.isClickedBtnSearch);
  const setIsClickedBtnSearch = useNavbar(
    (state) => state.setisclickedBtnSearch,
  );
  const [valueInput, setValueInput] = useState("");
  const navigate = useNavigate();

  const handleSearchAnime = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setValueInput("");
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(`/searchAnime/${valueInput}`);
      setIsClickedBtnSearch(false);
    }
  };
  return (
    <div
      className={`${isClickedBtnSearch ? "top-19 opacity-100" : "top-10 opacity-0"} absolute left-1/2 -z-1 flex w-full -translate-x-1/2 items-center bg-slate-700 px-2 text-white transition-all duration-500 sm:static sm:w-sm sm:translate-0 sm:opacity-100`}
    >
      <span>
        <MagnifyingGlassIcon size={20} />
      </span>
      <input
        type="text"
        id="anime"
        onChange={(e) => setValueInput(e.target.value)}
        onKeyDown={(e) => handleSearchAnime(e)}
        value={valueInput}
        placeholder="cari anime favorite kamu disini.."
        className="w-full rounded-md p-3 text-sm outline-0"
      />
    </div>
  );
};

export default SearchInput;
