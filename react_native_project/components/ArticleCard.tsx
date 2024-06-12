import { Article } from "@/models/article";
import { FontAwesome } from "@expo/vector-icons";
import { format } from "date-fns";
import { Link } from "expo-router";
import React, { FC } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

type Props = {
  article: Article;
};

export const ArticleCard: FC<Props> = ({ article }) => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.card}>
      <Link href="/modal" asChild>
        <TouchableOpacity style={styles.modalLink}>
          <View style={styles.header}>
            <Text>{format(article.created_at, "yyyy/MM/dd")}</Text>
            <Text>{article.title}</Text>
            <View style={styles.tags}>
              {article.tags.map((tag) => (
                <Text key={tag.name} style={styles.tag}>
                  {tag.name}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.footer}>
            <View style={styles.like}>
              <FontAwesome
                name="heart"
                size={25}
                color={Colors[colorScheme ?? "light"].text}
              />
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
        </TouchableOpacity>
      </Link>
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
    width: "100%",
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  tags: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    marginRight: 8,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  modalLink: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
