const CardAnimeLoader = () => {
  return (
    <div
      className={`group relative h-50 animate-pulse cursor-pointer overflow-hidden rounded-md bg-slate-500 shadow-sm`}
    >
      <h3 className="absolute bottom-2 left-1/2 mt-1 line-clamp-2 h-9 w-10/12 -translate-x-1/2 animate-pulse rounded-sm bg-slate-400"></h3>
      <span className="absolute top-0 h-5 w-10 animate-pulse rounded-br-xl bg-slate-400"></span>
      <span className="absolute top-1/2 right-0 h-6 w-12 -translate-y-1/2 animate-pulse rounded-l-sm bg-slate-400"></span>
    </div>
  );
};

export default CardAnimeLoader;
