export interface DataAllAnime {
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
