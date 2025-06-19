import { Fragment } from "react/jsx-runtime";
import useIsLoading from "../../stores/useIsLoading";
import CardAnimeLoader from "../CardAnime/CardAnimeLoader";

const LoaderHome = () => {
  const isLoading = useIsLoading((state) => state.isLoading);
  return (
    isLoading && (
      <Fragment>
        <div className="mb-12 flex w-11/12 items-center justify-between gap-4">
          <h2 className="animate-pulse h-13 w-50 self-start rounded-2xl bg-slate-500 sm:h-14.5 sm:w-55"></h2>
          <h3 className="animate-pulse h-10.5 w-28 self-start rounded-2xl bg-slate-500 sm:h-12 sm:w-33"></h3>
        </div>
        <div className="grid w-11/12 grid-cols-2 place-content-center gap-x-4 gap-y-4 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] sm:gap-x-8">
          {Array.from({ length: 12 }).map((_, id) => (
            <CardAnimeLoader key={id} />
          ))}
        </div>
      </Fragment>
    )
  );
};

export default LoaderHome;
