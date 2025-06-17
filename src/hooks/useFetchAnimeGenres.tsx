import { useEffect, useState } from "react";
import useIsLoading from "../stores/useIsLoading";
import type { DataGenres } from "../interfaces/DataGenres";
import { animeGenres } from "../services/apiAnimeGenres";

const useFetchAnimeGenres = () => {
  const isLoading = useIsLoading((state) => state.isLoading);
  const setIsLoading = useIsLoading((state) => state.setIsLoading);
  const [dataGenres, setDataGenres] = useState<DataGenres[]>([]);
  useEffect(() => {
    const fetchAnimeGenres = async () => {
      setIsLoading(true);
      try {
        const response = await animeGenres();
        const result = response.data.map((genre: DataGenres) => ({
          name: genre.name,
          mal_id: genre.mal_id,
        }));
        setDataGenres(result);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnimeGenres();
  }, [setIsLoading]);
  return { isLoading, dataGenres };
};

export default useFetchAnimeGenres;
