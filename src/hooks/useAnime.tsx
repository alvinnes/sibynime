import { useEffect, useState } from "react";
import type {
  DataSlideAnime,
  DataSortAnime,
} from "../interfaces/DataSortAnime";
import useIsLoading from "../stores/useIsLoading";
import type { DataPagination } from "../interfaces/DataPagination";

interface ApiResponse {
  data: DataSlideAnime[];
  pagination: {
    last_visible_page: number;
  };
}

interface UseAnimeProps {
  api: (page: number) => Promise<ApiResponse>;
}

const useAnime = ({ api }: UseAnimeProps) => {
  const [dataAnime, setDataAnime] = useState<DataSortAnime[]>([]);
  const setIsLoading = useIsLoading((state) => state.setIsLoading);
  const isLoading = useIsLoading((state) => state.isLoading);
  const [dataPagination, setDataPagination] = useState<DataPagination>(Object);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAnime = async () => {
      setIsLoading(true);
      try {
        const response = await api(page);
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
  }, [setIsLoading, page, api]);
  return { setPage, page, dataPagination, isLoading, dataAnime };
};

export default useAnime;
