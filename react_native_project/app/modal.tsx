import { articleUrlState } from "@/states/selector/articleSelector";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { useRecoilValue } from "recoil";

export default function ModalScreen() {
  const articleUrl = useRecoilValue(articleUrlState);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <WebView source={{ uri: articleUrl }} style={styles.webview} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  webview: {},
});
