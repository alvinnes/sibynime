import useIsLoading from "../../stores/useIsLoading";
import CardAnimeLoader from "../CardAnime/CardAnimeLoader";

const LoaderSlideAnime = () => {
  const isLoading = useIsLoading((state) => state.isLoading);
  return (
    isLoading && (
      <>
        <div className="mb-12 flex w-11/12 items-center justify-between gap-4">
          <h2 className="h-13 w-50 animate-pulse self-start rounded-2xl bg-slate-500 sm:h-14.5 sm:w-55"></h2>
          <h3 className="h-10.5 w-28 animate-pulse self-start rounded-2xl bg-slate-500 sm:h-12 sm:w-33"></h3>
        </div>
        <div
          className={`grid w-11/12 grid-cols-2 place-content-center gap-x-8 gap-y-4 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))]`}
        >
          {Array.from({ length: 6 }).map((_, id) => (
            <CardAnimeLoader key={id} />
          ))}
        </div>
      </>
    )
  );
};

export default LoaderSlideAnime;
