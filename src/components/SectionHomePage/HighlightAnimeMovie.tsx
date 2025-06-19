import useHighlightAnime from "../../hooks/useHighlightAnime";
import type { DataSortAnime } from "../../interfaces/DataSortAnime";
import { highlightAnimeMovie } from "../../services/apiHighlightAnime";
import CardAnime from "../CardAnime/CardAnime";
import AnimeHighlightLayouts from "../Layouts/AnimeHighlightLayouts";
import { SwiperSlide } from "swiper/react";
import LoaderSlideAnime from "./LoaderSlideAnime";

const HighlightAnimeMovie = () => {
  const { dataAnime, setRef } = useHighlightAnime({ api: highlightAnimeMovie });
  return (
    <AnimeHighlightLayouts
      title="Anime Movie"
      link="/animeMovie"
      spacing="pt-15"
      ref={setRef}
    >
      <LoaderSlideAnime />
      {dataAnime.map((anime: DataSortAnime, id) => (
        <SwiperSlide key={id}>
          <CardAnime anime={anime} />
        </SwiperSlide>
      ))}
    </AnimeHighlightLayouts>
  );
};

export default HighlightAnimeMovie;
