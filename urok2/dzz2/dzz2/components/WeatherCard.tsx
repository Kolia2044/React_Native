import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image } from "react-native";
import { WeatherData } from "../types/weather";

type WeatherCardProps = {
  data: WeatherData;
};

export function WeatherCard({ data }: WeatherCardProps) {
  console.log("weather icon:", data.icon);
  return (
    <View>
      <Text style={styles.cityName}>Назва міста: {data.city}</Text>
      <Image source={{ uri: data.icon }} style={styles.image} />
      <Text style={styles.temperature}>Температура: {data.temperature}°C</Text>
      <Text style={styles.description}>Опис: {data.description}</Text>
      <Text style={styles.humidity}>Вологість: {data.humidity}%</Text>
      <Text style={styles.windSpeed}>
        Швидкість вітру: {data.wind_speed} м/с
      </Text>
      <Text style={styles.sunrise}>Схід сонця: {data.sunrise_time}</Text>
      <Text style={styles.sunset}>Захід сонця: {data.sunset_time}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cityName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  humidity: {
    fontSize: 16,
    marginBottom: 5,
  },
  windSpeed: {
    fontSize: 16,
    marginBottom: 5,
  },
  sunrise: {
    fontSize: 16,
    marginBottom: 5,
  },
  sunset: {
    fontSize: 16,
    marginBottom: 5,
  },
});
