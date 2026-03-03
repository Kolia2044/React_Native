import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Header } from "../components/Title";

interface User {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};
type Size = "small" | "medium" | "large";

export default function Index() {
  //const [notes, setNotes] = useState<string[]>;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
      response.json(),
    );
    //.then((data) => setNotes(data))
  }, []);

  return (
    <View
      style={{
        flex: 1,
        //justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header title="Test Title" />
    </View>
  );
}
