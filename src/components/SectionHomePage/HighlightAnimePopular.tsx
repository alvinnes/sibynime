import useHighlightAnime from "../../hooks/useHighlightAnime";
import type { DataSortAnime } from "../../interfaces/DataSortAnime";
import { highlightAnimePopular } from "../../services/apiHighlightAnime";
import CardAnime from "../CardAnime/CardAnime";
import AnimeHighlightLayouts from "../Layouts/AnimeHighlightLayouts";
import { SwiperSlide } from "swiper/react";
import LoaderSlideAnime from "./LoaderSlideAnime";

const HighlightAnimePopular = () => {
  const { dataAnime, setRef } = useHighlightAnime({
    api: highlightAnimePopular,
  });
  return (
    <AnimeHighlightLayouts
      title="Anime Populer"
      link="/animePopular"
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

export default HighlightAnimePopular;
