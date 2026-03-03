import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={style.block}>
      <Text style={style.title}>My program</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ width: 50, height: 50, backgroundColor: "red" }}></View>
        <View
          style={{ width: 50, height: 50, backgroundColor: "green" }}
        ></View>
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }}></View>
      </View>
      <Text>Hello from absudo</Text>
      <View>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ width: 50, height: 50 }}
        />
        <Image
          source={require("@/assets/images/images.webp")}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "purple",
          padding: 10,
        }}
      >
        <Text style={{ color: "red" }}>Button</Text>
      </TouchableOpacity>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>About</Link>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "purple",
  },
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
