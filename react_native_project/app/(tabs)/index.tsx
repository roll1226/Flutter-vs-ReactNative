import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useArticle } from "@/hooks/useArticle";
import { useSearchQiita } from "@/hooks/useSearchQiita";
import React from "react";
import { Button, StyleSheet, TextInput } from "react-native";

export default function TabOneScreen() {
  const { title, setTitle, articles, searchQiitaHandler } = useSearchQiita();
  const { article, setArticle } = useArticle();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        placeholder="Input Title"
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <Button onPress={() => searchQiitaHandler(title)} title="Button"></Button>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
