import { StarIcon } from "@phosphor-icons/react";
import { Fragment } from "react";
import type { DataSortAnime } from "../../interfaces/DataSortAnime";

interface DescriptionCardProps {
  anime: DataSortAnime;
}

const DescriptionCard = ({ anime }: DescriptionCardProps) => {
  return (
    <Fragment>
      <h3 className="absolute bottom-2 left-1/2 mt-1 line-clamp-2 w-10/12 -translate-x-1/2 text-center text-sm leading-4.5 text-ellipsis text-slate-200">
        {anime.title}
      </h3>
      <span className="absolute top-0 rounded-br-xl bg-slate-800/50 px-3 text-sm text-white shadow-lg backdrop-blur-2xl">
        {anime.type}
      </span>
      <span className="absolute top-1/2 right-0 flex -translate-y-1/2 items-center gap-1 rounded-l-sm bg-indigo-500 px-2 py-1 text-[0.8em] text-white shadow-xl">
        <StarIcon size={14} weight="bold" /> {anime.score}
      </span>
    </Fragment>
  );
};

export default DescriptionCard;
