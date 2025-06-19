import { useEffect, useState } from "react";
import useIsLoading from "../stores/useIsLoading";
import { animeSchedule } from "../services/apiAnimeSchedule";
import {
  type DataSortAnime,
  type DataSlideAnime,
} from "../interfaces/DataSortAnime";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "sunday"];

interface GrouppedAnime {
  day: string[];
  items: DataSortAnime[];
}

const useAnimeSchedule = () => {
  const isLoading = useIsLoading((state) => state.isLoading);
  const setIsLoading = useIsLoading((state) => state.setIsLoading);
  const [dataAnime, setDataAnime] = useState<GrouppedAnime[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isLoading || currentIndex >= days.length) return;

    const fetchAnimeSchedule = async () => {
      const currentDay = days[currentIndex];
      setIsLoading(true);
      try {
        const response = await animeSchedule(currentDay);
        const result = response.data.map((anime: DataSlideAnime) => ({
          mal_id: anime.mal_id,
          title: anime.title,
          img: anime.images.webp.large_image_url,
          score: anime.score,
          type: anime.type,
        }));
        setDataAnime((prev) => [
          ...prev,
          {
            day: [
              "Senin",
              "Selasa",
              "Rabu",
              "Kamis",
              "Jum'at",
              "Sabtu",
              "Minggu",
            ],
            items: result,
          },
        ]);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, 2000);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnimeSchedule();
  }, [setIsLoading, currentIndex, isLoading]);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const nearBottom =
  //         window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  //       if (nearBottom && !isLoading && currentIndex < days.length) {
  //         setCurrentIndex((prev) => prev + 1);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [currentIndex, isLoading]);

  return { isLoading, dataAnime };
};

export default useAnimeSchedule;
