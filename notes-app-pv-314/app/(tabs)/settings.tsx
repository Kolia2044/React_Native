import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import useTheme, { ColorScheme } from "@/hooks/useTheme";

export default function SettingsScreen() {
  const { colors, isDarkMode, toggleDarkMode } = useTheme();

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity onPress={toggleDarkMode} style={styles.button}>
          <Text style={{ color: colors.text }}>Change color theme</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.bg,
    },
    title: {
      color: colors.text,
      textAlign: "center",
      marginBottom: 16,
      fontSize: 24,
    },
    button: {
      padding: 16,
      backgroundColor: colors.primary,
      borderRadius: 8,
      flexGrow: 0,
    },
  });
