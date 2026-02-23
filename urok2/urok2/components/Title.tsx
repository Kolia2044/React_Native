import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 10,

    //height: 60,
    //backgroundColor: "#f4511e",
    //justifyContent: "center",
    //alignItems: "center",
  },
  title: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
