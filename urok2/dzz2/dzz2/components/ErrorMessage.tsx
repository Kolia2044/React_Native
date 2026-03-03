import React from "react";
import { Text, StyleSheet } from "react-native";

type ErrorMessageProps = {
  message: string | null;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) {
    return null;
  }

  return <Text style={styles.error}>{message}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    paddingHorizontal: 20,
  },
});
