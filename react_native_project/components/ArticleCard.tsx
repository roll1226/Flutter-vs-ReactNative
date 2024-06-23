import { Article } from "@/models/article";
import { articleAtom } from "@/states/atoms/articleAtom";
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
import { useRecoilState } from "recoil";

type Props = {
  article: Article;
};

export const ArticleCard: FC<Props> = ({ article }) => {
  const colorScheme = useColorScheme();
  const [, setArticle] = useRecoilState(articleAtom);

  const setArticleState = (article: Article) => {
    setArticle(article);
  };

  return (
    <View style={styles.card}>
      <Link href="/modal" asChild onPress={() => setArticleState(article)}>
        <TouchableOpacity style={styles.modalLink} testID="modal-link">
          <View style={styles.header}>
            <Text style={styles.createdAt}>
              {format(article.created_at, "yyyy/MM/dd")}
            </Text>
            <Text>{article.title}</Text>
            <View style={styles.tags}>
              {article.tags.map((tag, index) => (
                <Text key={index}>{tag}</Text>
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
              <Text>{article.likesCount}</Text>
            </View>

            <View style={styles.user}>
              <Image
                style={styles.icon}
                testID="article-image"
                source={{
                  uri: article.user.profileImageUrl,
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
  createdAt: {
    marginBottom: 8,
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
    gap: 8,
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
  header: {
    flexDirection: "column",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  modalLink: {
    gap: 20,
    width: "100%",
  },
});
