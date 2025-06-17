import Navbar from "../components/Navbar/Navbar";
import LoaderGenres from "../components/AnimeGenres/LoaderGenres";
import useFetchAnimeGenres from "../hooks/useFetchAnimeGenres";
import ContentAnimeGenres from "../components/AnimeGenres/ContentAnimeGenres";

const AnimeGenresPage = () => {
  const { isLoading, dataGenres } = useFetchAnimeGenres();
  return (
    <main className="flex w-full justify-center">
      <Navbar />
      <section className="flex w-full flex-col items-center pt-40 pb-20">
        <LoaderGenres />
        <h2
          className={`${isLoading && "hidden"} bg-primary mb-15 ml-3 self-start rounded-2xl px-4 py-3 text-2xl font-semibold text-white sm:mb-20 sm:ml-16`}
        >
          Daftar Genre
        </h2>
        <ContentAnimeGenres dataGenres={dataGenres} />
      </section>
    </main>
  );
};

export default AnimeGenresPage;
