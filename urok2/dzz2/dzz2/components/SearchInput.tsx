import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

type SearchInputProps = {
  onSearch: (city: string) => void;
};

export function SearchInput({ onSearch }: SearchInputProps) {
  const [text, setText] = useState("");

  const handlePress = () => {
    if (text.trim()) {
      onSearch(text.trim());
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Введіть назву міста"
      />
      <Button title="Пошук" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
