import { VideoIcon } from "@phosphor-icons/react";
import type { DataSortAnime } from "../../interfaces/DataSortAnime";
import DescriptionCard from "./DescriptionCard";

interface CardAnimeProps {
  anime: DataSortAnime;
  customStyle?: string;
}

const CardAnime = ({ anime, customStyle }: CardAnimeProps) => {
  return (
    <div
      className={` ${customStyle} group relative h-50 cursor-pointer overflow-hidden rounded-sm shadow-sm before:absolute before:bottom-0 before:left-0 before:size-full before:bg-linear-to-t before:from-slate-900 before:via-transparent before:to-transparent`}
    >
      <img
        src={anime.img}
        alt={anime.title}
        className="size-full object-cover"
      />
      <DescriptionCard anime={anime} />
      <div className="absolute top-0 left-0 flex size-full items-center justify-center bg-black/50 text-white opacity-0 transition-all duration-400 group-hover:opacity-100">
        <VideoIcon size={40} />
      </div>
    </div>
  );
};

export default CardAnime;
