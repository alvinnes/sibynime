import CardAnime from "../components/CardAnime/CardAnime";
import AnimeLayouts from "../components/Layouts/AnimeLayouts";
import PaginationAnime from "../components/Pagination/PaginationAnime";
import useAnimeSearch from "../hooks/useAnimeSearch";
import type { DataSortAnime } from "../interfaces/DataSortAnime";

const AnimeSearch = () => {
  const { page, setPage, name, isLoading, dataPagination, dataAnime } =
    useAnimeSearch();

  return (
    <AnimeLayouts text={`Pencarian anime #${name}`}>
      <div
        className={`${isLoading && "hidden"} mb-5 grid w-11/12 grid-cols-2 gap-x-4 gap-y-4 py-10 sm:ml-8 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] sm:gap-x-8`}
      >
        {dataAnime.map((anime: DataSortAnime, id) => (
          <CardAnime anime={anime} key={id} />
        ))}
      </div>

      <PaginationAnime
        page={page}
        setPage={setPage}
        dataPagination={dataPagination}
      />
    </AnimeLayouts>
  );
};

export default AnimeSearch;
