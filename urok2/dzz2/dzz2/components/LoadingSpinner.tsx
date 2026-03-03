import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type LoadingSpinnerProps = {
  isLoading: boolean;
};

export function LoadingSpinner({ isLoading }: LoadingSpinnerProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>Завантаження...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    minHeight: 200,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});
