import CardAnime from "../components/CardAnime/CardAnime";
import AnimeLayouts from "../components/Layouts/AnimeLayouts";
import PaginationAnime from "../components/Pagination/PaginationAnime";
import useAnime from "../hooks/useAnime";
import type { DataSortAnime } from "../interfaces/DataSortAnime";
import { animeEnd } from "../services/apiAnimeEnd";

const AnimeEndPage = () => {
  const { page, setPage, dataPagination, isLoading, dataAnime } = useAnime({
    api: animeEnd,
  });
  return (
    <AnimeLayouts text={`Anime Tamat #${page}`}>
      <div
        className={`${isLoading && "hidden"} grid w-11/12 grid-cols-2 place-content-center gap-x-4 gap-y-4 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] sm:gap-x-8 mb-5`}
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

export default AnimeEndPage;
