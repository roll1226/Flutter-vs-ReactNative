import { Article } from "@/models/article";
import { format } from "date-fns";
import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
  article: Article;
};

export const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text>{format(article.created_at, "yyyy/MM/dd")}</Text>
        <Text>{article.title}</Text>
        <View style={styles.tags}>
          {article.tags.map((tag) => (
            <Text>{tag.name}</Text>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.like}>
          <Icon name="heart" size={24} />
          <Text>{article.likes_count}</Text>
        </View>

        <View style={styles.user}>
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
    gap: 20,
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  tags: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  like: {
    alignItems: "center",
    gap: 4,
  },
  user: {
    alignItems: "flex-end",
    gap: 8,
  },
  header: {},
  footer: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
});
