import { useEffect, useState } from "react";
import type { DataSortAnime } from "../interfaces/DataSortAnime";
import useIsLoading from "../stores/useIsLoading";
import type { DataAllAnime } from "../interfaces/DataAllAnime";
import useLazyLoading from "./useLazyLoading";

interface ApiResponse {
  data: DataAllAnime[];
}

interface UseHighlightAnimeProps {
  api: () => Promise<ApiResponse>;
}

const useHighlightAnime = ({ api }: UseHighlightAnimeProps) => {
  const [dataAnime, setDataAnime] = useState<DataSortAnime[]>([]);
  const setIsLoading = useIsLoading((state) => state.setIsLoading);
  const isLoading = useIsLoading((state) => state.isLoading);
  const [setRef, isVisible] = useLazyLoading();

  useEffect(() => {
    if (isVisible && dataAnime.length === 0) {
      const fetchAnimeOngoing = async () => {
        setIsLoading(true);
        try {
          const response = await api();
          const result = response.data.map((data: DataAllAnime) => ({
            mal_id: data.mal_id,
            img: data.images.webp.large_image_url,
            title: data.title,
            score: data.score,
            type: data.type,
          }));
          setDataAnime(result);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchAnimeOngoing();
    }
  }, [setIsLoading, api, isVisible, dataAnime.length]);
  return { isLoading, dataAnime, setRef };
};

export default useHighlightAnime;
