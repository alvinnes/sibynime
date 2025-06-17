import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type {
  DataSlideAnime,
  DataSortAnime,
} from "../interfaces/DataSortAnime";
import type { DataPagination } from "../interfaces/DataPagination";
import { detailAnimeGenres } from "../services/apiAnimeGenres";
import useIsLoading from "../stores/useIsLoading";

const useFetchAllAnimeGenres = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const isLoading = useIsLoading((state) => state.isLoading);
  const setIsLoading = useIsLoading((state) => state.setIsLoading);
  const [dataAnime, setDataAnime] = useState<DataSortAnime[]>([]);
  const [dataPagination, setDataPagination] = useState<DataPagination>(Object);

  useEffect(() => {
    const fetchAllAnimeGenres = async () => {
      setIsLoading(true);
      try {
        const response = await detailAnimeGenres(id, page);
        const result = response.data.map((anime: DataSlideAnime) => ({
          mal_id: anime.mal_id,
          title: anime.title,
          img: anime.images.webp.large_image_url,
          score: anime.score,
          type: anime.type,
        }));
        setDataAnime(result);
        setDataPagination(response.pagination);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllAnimeGenres();
  }, [id, page, setIsLoading]);
  return { page, setPage, isLoading, dataAnime, dataPagination };
};

export default useFetchAllAnimeGenres;
