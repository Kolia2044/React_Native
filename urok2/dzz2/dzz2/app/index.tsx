import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ErrorMessage } from "../components/ErrorMessage";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { SearchInput } from "../components/SearchInput";
import { WeatherCard } from "../components/WeatherCard";
import { WeatherData } from "../types/weather";

export default function Index() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = (cityName: string) => {
    setIsLoading(true);
    setError(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=0c9234bc2bac345d231c27dd245a6388`,
    )
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error(`Місто "${cityName}" не знайдено`);
        }
        return response.json();
      })
      .then((json: any) => {
        const weatherData: WeatherData = {
          city: json.name,
          temperature: json.main.temp,
          feels_like: json.main.feels_like,
          temp_min: json.main.temp_min,
          temp_max: json.main.temp_max,
          description: json.weather[0].description,
          humidity: json.main.humidity,
          wind_speed: json.wind.speed,
          sunrise_time: new Date(json.sys.sunrise * 1000).toLocaleTimeString(),
          sunset_time: new Date(json.sys.sunset * 1000).toLocaleTimeString(),
          icon: `https://openweathermap.org/img/w/${json.weather[0].icon}.png`,
        };
        setData(weatherData);
      })
      .catch((err: Error) => {
        console.error("Error fetching weather data:", err);
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSearch = (newCity: string) => {
    setCity(newCity);
    fetchWeather(newCity);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput onSearch={handleSearch} />
      <LoadingSpinner isLoading={isLoading} />
      <ErrorMessage message={error} />
      {!data && !isLoading && !error && (
        <Text style={styles.placeholder}>Введіть назву міста для пошуку погоди</Text>
      )}
      {data && !isLoading && <WeatherCard data={data} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholder: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#666",
    paddingHorizontal: 20,
  },
});
