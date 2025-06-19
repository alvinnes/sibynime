import CardAnime from "../components/CardAnime/CardAnime";
import useAnimeSchedule from "../hooks/useAnimeSchedule";
import type { DataSortAnime } from "../interfaces/DataSortAnime";

const AnimeSchedule = () => {
  const { dataAnime, isLoading } = useAnimeSchedule();

  return (
    <main className="min-h-screen w-full">
      {dataAnime.map(({ day, items }, id) => (
        <section
          key={id}
          className="flex w-full flex-col items-center pt-40 pb-20"
        >
          {day.map((day) => (
            <h2
              className={`${isLoading && "hidden"} bg-primary mb-15 ml-2 self-start rounded-2xl px-4 py-3 text-2xl font-semibold text-white sm:mb-20 sm:ml-16`}
            >
              Hari {day}
            </h2>
          ))}
          <div
            className={`${isLoading && "hidden"} grid w-11/12 grid-cols-2 place-content-center gap-x-4 gap-y-4 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] sm:gap-x-8`}
          >
            {items.map((anime: DataSortAnime, id) => (
              <CardAnime anime={anime} key={id} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default AnimeSchedule;
