import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type NoteItemProps = {
  title: string;
  onDelete: () => void;
};

export function NoteItem({ title, onDelete }: NoteItemProps) {
  return (
    <View style={styles.note}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
  deleteButton: {
    padding: 4,
    marginLeft: 8,
  },
  deleteText: {
    color: "#ff0000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
