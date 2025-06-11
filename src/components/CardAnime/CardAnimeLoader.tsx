import useIsLoading from "../../stores/useIsLoading";

const CardAnimeLoader = () => {
  const isLoading = useIsLoading((state) => state.isLoading);
  return (
    <div
      className={`${isLoading ? "block" : "hidden"} group relative h-50 animate-pulse cursor-pointer overflow-hidden rounded-md bg-slate-500 shadow-sm`}
    ></div>
  );
};

export default CardAnimeLoader;
