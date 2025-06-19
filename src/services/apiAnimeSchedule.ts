import axios from "axios";

export const animeSchedule = async (day: string) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/schedules?filter=${day}`,
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
