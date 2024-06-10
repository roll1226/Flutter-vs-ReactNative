import { Article } from "@/models/article";
import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  article: Article;
};

export const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <View style={styles.card}>
      <Text>{article.title}</Text>
      <Image
        style={styles.icon}
        source={{
          uri: article.user.profile_image_url,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    borderColor: "#999",
  },
  icon: {
    width: 40,
    height: 40,
  },
});
