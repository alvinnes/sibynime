import { Fragment } from "react/jsx-runtime";
import useIsLoading from "../../stores/useIsLoading";
import CardAnimeLoader from "../CardAnime/CardAnimeLoader";

const LoaderAnimePopular = () => {
  const isLoading = useIsLoading((state) => state.isLoading);
  return (
    isLoading && (
      <Fragment>
        <h2 className="mb-15 sm:mb-20 ml-2 sm:ml-16 h-14.5 w-55 animate-pulse self-start rounded-2xl bg-slate-500"></h2>
        <div
          className={`grid w-11/12 grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] place-content-center gap-x-8 gap-y-4`}
        >
          {Array.from({ length: 18 }).map((_, id) => (
            <CardAnimeLoader key={id} />
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button
            className={`size-9.5 animate-pulse rounded-sm bg-slate-500`}
          ></button>
          <p className="h-10 w-22 animate-pulse rounded-sm bg-slate-500"></p>
          <button
            className={`size-9.5 animate-pulse rounded-sm bg-slate-500`}
          ></button>
        </div>
      </Fragment>
    )
  );
};

export default LoaderAnimePopular;
