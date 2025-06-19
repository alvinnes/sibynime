import axios from "axios";

export const animeUpcoming = async (page: number) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?status=upcoming&order_by=popularity&limit=24&page=${page}`,
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
