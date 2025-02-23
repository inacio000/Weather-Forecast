import React, { useState } from "react";
import CityInput from "./components/CityInput";
import WeatherChart from "./components/WeatherChart";
import { getWeatherForecast } from "./services/weatherService";
import "./index.css";
import { Container } from "./styles";

const App: React.FC = () => {
  const [forecastData, setForecastData] = useState<any[]>([]);

  const handleSearch = async (city: string) => {
    try {
      const data = await getWeatherForecast(city);
      setForecastData(data.list);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <Container>
      <h1>Weather Forecast</h1>
      <CityInput onSearch={handleSearch} />
      <WeatherChart data={forecastData} />
    </Container>
  );
};

export default App;
