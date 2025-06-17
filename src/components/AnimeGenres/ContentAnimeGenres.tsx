import { Link } from "react-router";
import type { DataGenres } from "../../interfaces/DataGenres";
import useIsLoading from "../../stores/useIsLoading";

interface ContentAnimeGenresProps {
  dataGenres: DataGenres[];
}
const ContentAnimeGenres = ({ dataGenres }: ContentAnimeGenresProps) => {
  const isLoading = useIsLoading((state) => state.isLoading);
  return (
    <div
      className={`${isLoading && "hidden"} flex w-11/12 flex-wrap gap-x-4 gap-y-4 text-indigo-400 sm:px-4`}
    >
      {dataGenres.map((item) => (
        <button
          key={item.mal_id}
          className="cursor-pointer rounded-xl bg-slate-800 px-6 py-2.5 font-semibold shadow-sm transition-all duration-500 hover:bg-indigo-500 hover:text-white"
        >
          <Link to={`/animeGenres/${item.mal_id}/${item.name}`}>
            {item.name}
          </Link>
        </button>
      ))}
    </div>
  );
};

export default ContentAnimeGenres;
