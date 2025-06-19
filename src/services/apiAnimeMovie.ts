import axios from "axios";

export const animeMovie = async (page: number) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?type=movie&order_by=popularity&limit=24&page=${page}`,
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
