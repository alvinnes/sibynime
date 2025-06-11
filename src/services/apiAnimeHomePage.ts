import axios from "axios";

export const animeOngoing = async () => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/anime?limit=12&status=airing&start_date=2025-04-01&type=tv&order_by=start_date&rating=pg13",
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
