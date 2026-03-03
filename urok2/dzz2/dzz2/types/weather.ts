export type WeatherData = {
  city: string;
  temperature: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
  humidity: number;
  wind_speed: number;
  icon: string;
  sunrise_time: string;
  sunset_time: string;
};

export type LoadingState = "idle" | "loading" | "success" | "error";

export type WeatherError = {
  message: string;
  code?: number;
};
