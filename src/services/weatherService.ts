import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherForecast = async (city: string) => {
  const geocodeResponse = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
    },
  });

  const { lat, lon } = geocodeResponse.data.coord;

  const forecastResponse = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: "metric",
    },
  });

  return forecastResponse.data;
};
