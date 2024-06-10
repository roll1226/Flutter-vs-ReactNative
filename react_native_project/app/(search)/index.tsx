import { ArticleCard } from "@/components/ArticleCard";
import { useSearchQiita } from "@/hooks/useSearchQiita";
import React from "react";
import { Button, ScrollView, StyleSheet, TextInput, View } from "react-native";

export default function SearchScreen() {
  const { title, setTitle, articles, searchQiitaHandler } = useSearchQiita();

  return (
    <View>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(title) => setTitle(title)}
        placeholder="Qiita記事検索"
      />
      <Button onPress={() => searchQiitaHandler(title)} title="検索" />
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View style={styles.separator} />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={{ rowGap: 20 }}>
        {articles.map((article, index) => {
          return <ArticleCard article={article} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: "rgba(100,100,100, 0.5)",
  },
  scroll: {
    height: "70%",
    padding: 20,
  },
});
