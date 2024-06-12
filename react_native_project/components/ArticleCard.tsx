import { Article } from "@/models/article";
import { FontAwesome } from "@expo/vector-icons";
import { format } from "date-fns";
import { Link } from "expo-router";
import React, { FC } from "react";
import {
  Button,
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
      <Link href="/modal">
        <View style={styles.header}>
          <View>
            <Text>{format(article.created_at, "yyyy/MM/dd")}</Text>
            <Text>{article.title}</Text>
            <View style={styles.tags}>
              {article.tags.map((tag) => (
                <Text>{tag.name}</Text>
              ))}
            </View>
          </View>
        </View>
      </Link>

      <View style={styles.footer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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

        <View>
          <TouchableOpacity style={styles.button}>
            <Link href="/modal" asChild>
              <Button title="詳細" />
            </Link>
          </TouchableOpacity>
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
    flexDirection: "column",
    gap: 12,
  },
  button: {
    borderColor: "#229",
    borderWidth: 2,
    borderRadius: 5,
  },
});
