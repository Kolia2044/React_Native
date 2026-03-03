import { Platform, StyleSheet, View, Text, Image } from "react-native";
import { Link } from "expo-router";

export default function AboutScreen() {
  return (
    <View style={styles.block}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2o1hdCukkP7E6sC55YT0mjnxgaeL2UxYt_KBQxEV3ye0auP6wAcO7LXciWDLDpvba9rhiCHAR8W2jtXCwpCqv5fi_8fnWTNoBtadxLuEy6Q&s=10",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>Name: Mykola Horbei</Text>
      <Text style={styles.text}>Favorite programming language:Python</Text>
      <Link href="/" style={styles.link}>
        Повернутись назад
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 50,
  },
  text: {
    color: "green",
  },
  link: {
    color: "red",
    marginTop: 20,
  },
});
