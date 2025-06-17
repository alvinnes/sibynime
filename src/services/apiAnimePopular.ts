import axios from "axios";

export const animePopular = async (page: number) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/top/anime?limit=18&page=${page}`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
