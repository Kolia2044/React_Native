import { NoteItem } from "@/components/NoteItem";
import { Title } from "@/components/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Note {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function NotesScreen({ color }: { color: string }) {
  const [notes, setNotes] = useState<Note[]>([]);

  const [text, setText] = useState<string>("");

  useEffect(() => {
  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem("notes");
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error("Failed to load notes from storage", error);
    }
  };

  loadNotes();
}, []);
  
  
  const addNote = async () => {
    if (!text.trim()) return;

    const newNote:Note = {
      userId: 1,
      id: Date.now(),
      title: text.trim(),
      completed: false,
    };

    try {
      const updatedNotes = [...notes,newNote]
      setNotes(updatedNotes);
      setText("")
      await AsyncStorage.setItem("notes",JSON.stringify(updatedNotes));  
    }
    catch(error) {
      console.error(error)
    }
  };

  const deleteNote = async (id: number) => {
    try{
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
      await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
    catch (error){
      console.error(error)
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* {notes.map((note) => (
          <NoteItem key={note.id} title={note.title} />
        ))} */}

        <Title text="My Notes" />

        <TextInput
          placeholder="Add a new note"
          value={text}
          onChangeText={setText}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={addNote}>
          <Text style={styles.buttonText}>Add Note</Text>
        </TouchableOpacity>
        
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notes}
          keyExtractor={(note) => note.id.toString()}
          renderItem={({ item }) => (
            <NoteItem title={item.title} onDelete={() => deleteNote(item.id)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
