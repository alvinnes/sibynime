import { Fragment } from "react/jsx-runtime";
import useIsLoading from "../../stores/useIsLoading";
import CardAnimeLoader from "../CardAnime/CardAnimeLoader";

const LoaderHome = () => {
  const isLoading = useIsLoading((state) => state.isLoading);
  return (
    isLoading && (
      <Fragment>
        <div className="mb-12 flex w-11/12 items-center justify-between px-6">
          <h2 className="h-14.5 w-55 animate-pulse self-start rounded-2xl bg-slate-500"></h2>
          <h3 className="h-12 w-33 animate-pulse self-start rounded-2xl bg-slate-500"></h3>
        </div>
        <div className="grid w-11/12 grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] place-content-center gap-x-8 gap-y-4">
          {Array.from({ length: 12 }).map((_, id) => (
            <CardAnimeLoader key={id} />
          ))}
        </div>
      </Fragment>
    )
  );
};

export default LoaderHome;
