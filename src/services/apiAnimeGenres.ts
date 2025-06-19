import axios from "axios";

export const animeGenres = async () => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/genres/anime");
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const detailAnimeGenres = async (
  id: string | undefined,
  page: number,
) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?genres=${id}&limit=24&order_by=popularity&page=${page}`,
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
