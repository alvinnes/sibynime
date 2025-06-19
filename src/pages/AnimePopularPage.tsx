import { animePopular } from "../services/apiAnimePopular";
import { type DataSortAnime } from "../interfaces/DataSortAnime";
import CardAnime from "../components/CardAnime/CardAnime";
import PaginationAnime from "../components/Pagination/PaginationAnime";
import AnimeLayouts from "../components/Layouts/AnimeLayouts";
import useAnime from "../hooks/useAnime";

const AnimePopularPage = () => {
  const { page, setPage, dataAnime, dataPagination, isLoading } = useAnime({
    api: animePopular,
  });

  return (
    <AnimeLayouts text={`Anime Populer #${page}`}>
      <div
        className={`${isLoading && "hidden"} grid w-11/12 grid-cols-2 place-content-center gap-x-4 gap-y-4 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] sm:gap-x-8 mb-5`}
      >
        {dataAnime.map((anime: DataSortAnime, id) => (
          <CardAnime anime={anime} key={id} />
        ))}
      </div>

      <PaginationAnime
        dataPagination={dataPagination}
        page={page}
        setPage={setPage}
      />
    </AnimeLayouts>
  );
};

export default AnimePopularPage;
