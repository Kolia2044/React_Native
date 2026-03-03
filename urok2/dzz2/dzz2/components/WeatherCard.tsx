import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { WeatherData } from "../types/weather";

type WeatherCardProps = {
  data: WeatherData;
};

export function WeatherCard({ data }: WeatherCardProps) {
  console.log("weather icon:", data.icon);
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{data.city}</Text>
      <Image source={{ uri: data.icon }} style={styles.image} />
      <Text style={styles.temperature}>{data.temperature}°C</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.details}>Відчувається як: {data.feels_like}°C</Text>
      <Text style={styles.details}>Мін: {data.temp_min}°C | Макс: {data.temp_max}°C</Text>
      <Text style={styles.details}>Вологість: {data.humidity}%</Text>
      <Text style={styles.details}>Вітер: {data.wind_speed} м/с</Text>
      <Text style={styles.details}>Схід сонця: {data.sunrise_time}</Text>
      <Text style={styles.details}>Захід сонця: {data.sunset_time}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
    textTransform: "capitalize",
  },
  details: {
    fontSize: 14,
    marginBottom: 4,
    textAlign: "center",
    color: "#555",
  },
});
