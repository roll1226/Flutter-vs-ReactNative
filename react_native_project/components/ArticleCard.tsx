import { Article } from "@/models/article";
import { format } from "date-fns";
import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  article: Article;
};

export const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text>{format(article.created_at, "yyyy/MM/dd")}</Text>
        <Text>{article.title}</Text>
        <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
          {article.tags.map((tag) => (
            <Text>{tag.name}</Text>
          ))}
        </View>
      </View>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View>
          <Text>{article.likes_count}</Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Image
            style={styles.icon}
            source={{
              uri: article.user.profile_image_url,
            }}
          />
          <Text>{article.user.id}</Text>
        </View>
      </View>
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
    borderRadius: 50,
  },
});
