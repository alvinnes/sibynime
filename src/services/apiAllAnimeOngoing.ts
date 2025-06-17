import axios from "axios";

export const allAnimeOngoing = async (page: number) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?limit=18&status=airing&order_by=popularity&page=${page}`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
