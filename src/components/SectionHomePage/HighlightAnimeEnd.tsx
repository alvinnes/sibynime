import useHighlightAnime from "../../hooks/useHighlightAnime";
import type { DataSortAnime } from "../../interfaces/DataSortAnime";
import { highlightAnimeEnd } from "../../services/apiHighlightAnime";
import CardAnime from "../CardAnime/CardAnime";
import AnimeHighlightLayouts from "../Layouts/AnimeHighlightLayouts";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import LoaderSlideAnime from "./LoaderSlideAnime";

const HighlightAnimeEnd = () => {
  const { dataAnime, setRef, isLoading } = useHighlightAnime({
    api: highlightAnimeEnd,
  });
  return (
    <AnimeHighlightLayouts
      title="Anime Tamat"
      ref={setRef}
      link="/animeEnd"
      spacing="pt-5"
    >
      {isLoading ? (
        <LoaderSlideAnime />
      ) : (
        dataAnime.map((anime: DataSortAnime, id) => (
          <SwiperSlide key={id}>
            <CardAnime anime={anime} />
          </SwiperSlide>
        ))
      )}
    </AnimeHighlightLayouts>
  );
};

export default HighlightAnimeEnd;
