export interface DataSortAnime {
  mal_id: number;
  img: string;
  title: string;
  score: number;
  type: string;
}

export interface DataSlideAnime {
  mal_id: number;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  title: string;
  title_japanese?: string;
  score: number;
  type: string;
  rank: number;
  broadcast: {
    day: string;
  };
}
