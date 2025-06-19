import axios from "axios";

export const animeSearch = async (page: number, value: string | undefined) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?limit=24&order_by=popularity&page=${page}&q=${value}`,
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
