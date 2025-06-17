import {
  BookmarkIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  HeartIcon,
  QueueIcon,
  TagIcon,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";

export interface NavbarDatas {
  text: string;
  link: string;
  icon: ReactNode;
  id: number;
}

const navbarDatas: NavbarDatas[] = [
  {
    text: "Anime Populer",
    link: "/animePopular",
    icon: <HeartIcon size={25} />,
    id: 1,
  },
  {
    text: "Anime Ongoing",
    link: "/animeOngoing",
    icon: <ClockIcon size={25} />,
    id: 2,
  },
  {
    text: "Jadwal tayang",
    link: "/animeJadwal",
    icon: <CalendarIcon size={25} />,
    id: 3,
  },
  {
    text: "Daftar Anime",
    link: "/animeList",
    icon: <QueueIcon size={25} />,
    id: 4,
  },
  {
    text: "Anime Tamat",
    link: "/animeEnd",
    icon: <CheckCircleIcon size={25} />,
    id: 5,
  },
  {
    text: "Daftar Genre",
    link: "/animeGenres",
    icon: <TagIcon size={25} />,
    id: 6,
  },
  {
    text: "Bookmark",
    link: "/animeBookmark",
    icon: <BookmarkIcon size={25} />,
    id: 7,
  },
];

export default navbarDatas;
