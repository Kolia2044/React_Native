import { Platform, StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.block}>
      <Text style={styles.zah}>My first app</Text>
      <Text style={styles.opus}>This is test app</Text>
      <Link href="/about" style={styles.link}>
        Про мене
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  zah: {
    fontSize: 30,
    color: "green",
  },
  opus: {
    color: "green",
  },
  link: {
    color: "red",
    marginTop: 20,
  },
});
