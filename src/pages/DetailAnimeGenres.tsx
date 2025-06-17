import { useParams } from "react-router";
import AnimeLayouts from "../components/Layouts/AnimeLayouts";
import useFetchAllAnimeGenres from "../hooks/useFetchAllAnimeGenres";
import CardAnime from "../components/CardAnime/CardAnime";
import PaginationAnime from "../components/Pagination/PaginationAnime";
import type { DataSortAnime } from "../interfaces/DataSortAnime";

const DetailAnimeGenres = () => {
  const { page, setPage, isLoading, dataAnime, dataPagination } =
    useFetchAllAnimeGenres();
  const { name } = useParams();
  return (
    <AnimeLayouts text={`Anime Genre #${name}`}>
      <div
        className={`${isLoading && "hidden"} grid w-11/12 grid-cols-2 place-content-center gap-x-4 gap-y-4 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] sm:gap-x-8`}
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

export default DetailAnimeGenres;
