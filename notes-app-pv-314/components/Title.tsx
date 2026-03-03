import { Text, StyleSheet } from "react-native";

export function Title({ text }: { text: string }) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
    fontFamily: "sans-serif-medium",
  },
});
