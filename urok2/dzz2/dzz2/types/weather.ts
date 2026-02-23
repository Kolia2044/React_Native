export type WeatherData = {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  wind_speed: number;
  icon: string;
  sunrise_time: string;
  sunset_time: string;
};

type LoadingState = "idle" | "loading" | "success" | "error";

type WeatherError = {
  message: string;
  code?: number;
};
