import { useEffect, useState } from "react";
import useIsLoading from "../stores/useIsLoading";
import type {
  DataSlideAnime,
  DataSortAnime,
} from "../interfaces/DataSortAnime";
import type { DataPagination } from "../interfaces/DataPagination";
import { animeSearch } from "../services/apiSearchAnime";
import { useParams } from "react-router";

const useAnimeSearch = () => {
  const [dataAnime, setDataAnime] = useState<DataSortAnime[]>([]);
  const setIsLoading = useIsLoading((state) => state.setIsLoading);
  const isLoading = useIsLoading((state) => state.isLoading);
  const [dataPagination, setDataPagination] = useState<DataPagination>(Object);
  const [page, setPage] = useState(1);
  const { name } = useParams();

  useEffect(() => {
    const fetchAnime = async () => {
      setIsLoading(true);
      try {
        const response = await animeSearch(page, name);
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
    fetchAnime();
  }, [setIsLoading, page, name]);
  return { isLoading, page, setPage, dataPagination, dataAnime, name };
};

export default useAnimeSearch;
