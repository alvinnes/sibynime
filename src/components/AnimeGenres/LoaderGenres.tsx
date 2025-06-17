import { Fragment } from "react/jsx-runtime";
import useIsLoading from "../../stores/useIsLoading";

const LoaderGenres = () => {
  const isLoading = useIsLoading((state) => state.isLoading);
  return (
    isLoading && (
      <Fragment>
        <h2 className="mb-15 ml-3 h-14.5 w-55 animate-pulse self-start rounded-2xl bg-slate-500 sm:mb-20 sm:ml-16"></h2>
        <div className="flex w-11/12 flex-wrap gap-x-4 gap-y-4 sm:px-4 text-indigo-400">
          {Array.from({ length: 78 }).map((_, id) => (
            <button
              key={id}
              className="h-10 w-30 animate-pulse rounded-xl bg-slate-500 shadow-sm"
            ></button>
          ))}
        </div>
      </Fragment>
    )
  );
};

export default LoaderGenres;
