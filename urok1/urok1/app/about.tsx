import { View, Text, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={{}}>
      <Text style={styles.block}>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
