import axios from "axios";

export const animeEnd = async (page: number) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?limit=18&status=complete&order_by=popularity&page=${page}`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
