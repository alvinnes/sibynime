import type { DataSortAnime } from "../../interfaces/DataSortAnime";
import CardAnime from "../CardAnime/CardAnime";
import useHighlightAnime from "../../hooks/useHighlightAnime";
import { highlightAnimeOngoing } from "../../services/apiHighlightAnime";
import LoaderHome from "./LoaderHome";
import { Link } from "react-router";

const HighlightAnimeOngoing = () => {
  const { dataAnime, setRef, isLoading } = useHighlightAnime({
    api: highlightAnimeOngoing,
  });

  return (
    <section
      ref={setRef}
      className={`flex w-full flex-col items-center pt-30 pb-10`}
    >
      <LoaderHome />
      <div
        className={`${isLoading ? "hidden" : "flex"} mb-12 w-11/12 items-center justify-between`}
      >
        <h2 className="bg-primary self-start rounded-2xl px-2 py-3 text-xl font-semibold text-white sm:px-4 sm:text-2xl">
          Anime Ongoing
        </h2>
        <h3 className="self-start rounded-2xl bg-indigo-800 p-3 text-[0.8em] font-semibold text-white sm:text-base">
          <Link to={"/animeOngoing"}>Lihat Semua</Link>
        </h3>
      </div>
      <div
        className={`grid w-11/12 grid-cols-2 place-content-center gap-x-4 gap-y-4 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] sm:gap-x-8`}
      >
        {dataAnime.map((anime: DataSortAnime, id) => (
          <CardAnime anime={anime} key={id} />
        ))}
      </div>
    </section>
  );
};

export default HighlightAnimeOngoing;
