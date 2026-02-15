import { View, Text } from "react-native";
import { Link } from "expo-router";
export default function Contact() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "purple" }}>
        Contact
      </Text>
      <Link href={"/contact"}>About</Link>
    </View>
  );
}
