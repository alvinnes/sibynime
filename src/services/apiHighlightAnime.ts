import axios from "axios";

export const highlightAnimeEnd = async () => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/anime?limit=18&status=complete&min_score=8.8&order_by=popularity",
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const highlightAnimeOngoing = async () => {
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

export const highlightAnimePopular = async () => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/top/anime?limit=18",
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const highlightAnimeMovie = async () => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/anime?type=movie&order_by=popularity&limit=18&min_score=8.5",
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
