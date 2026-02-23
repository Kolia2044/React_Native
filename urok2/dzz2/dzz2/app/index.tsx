import { Text, View } from "react-native";
import { SearchInput } from "../components/SearchInput";
import { WeatherCard } from "../components/WeatherCard";
import { WeatherData } from "../types/weather";
import { useEffect, useState } from "react";
export default function Index() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>("Kyiv");

  const fetchWeather = (cityName: string) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=0c9234bc2bac345d231c27dd245a6388`,
    )
      .then((response: Response) => response.json())
      .then((json: any) => {
        const weatherData: WeatherData = {
          city: json.name,
          temperature: json.main.temp,
          description: json.weather[0].description,
          humidity: json.main.humidity,
          wind_speed: json.wind.speed,
          sunrise_time: new Date(json.sys.sunrise * 1000).toLocaleTimeString(),
          sunset_time: new Date(json.sys.sunset * 1000).toLocaleTimeString(),
          icon: `https://openweathermap.org/img/w/${json.weather[0].icon}.png`,
        };
        setData(weatherData);
      })
      .catch((error: Error) =>
        console.error("Error fetching weather data:", error),
      );
  };
  const handleSearch = (newCity: string) => {
    setCity(newCity);
    fetchWeather(newCity);
  };

  return (
    <View>
      <SearchInput onSearch={handleSearch} />
      {data && <WeatherCard data={data} />}
    </View>
  );
}
