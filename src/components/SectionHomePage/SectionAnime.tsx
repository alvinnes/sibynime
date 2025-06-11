import { Fragment, useEffect, useState } from "react";
import { animeOngoing } from "../../services/apiAnimeHomePage";
import type { DataSortAnime } from "../../interfaces/DataSortAnime";
import type { DataAllAnime } from "../../interfaces/DataAllAnime";
import CardAnime from "../CardAnime/CardAnime";
import CardAnimeLoader from "../CardAnime/CardAnimeLoader";
import useIsLoading from "../../stores/useIsLoading";

const SectionAnime = () => {
  const [dataAnime, setDataAnime] = useState<DataSortAnime[]>([]);
  const setIsLoading = useIsLoading((state) => state.setIsLoading);

  useEffect(() => {
    const fetchAnimeOngoing = async () => {
      setIsLoading(true);
      try {
        const response = await animeOngoing();
        const result = response.data.map((data: DataAllAnime) => ({
          malId: data.mal_id,
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
  }, [setIsLoading]);
  return (
    <section className="flex w-full flex-col items-center py-30">
      <div className="mb-12 flex w-11/12 items-center justify-between px-6">
        <h2 className="bg-primary self-start rounded-2xl px-4 py-3 text-2xl font-semibold text-white">
          Anime Ongoing
        </h2>
        <h3 className="self-start rounded-2xl bg-indigo-800 p-3 font-semibold text-white">
          Lihat Semua
        </h3>
      </div>
      <div className="grid w-11/12 grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] place-content-center gap-x-8 gap-y-4">
        {dataAnime.map((anime: DataSortAnime, id) => (
          <Fragment key={id}>
            <CardAnime anime={anime} />
            <CardAnimeLoader />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default SectionAnime;
