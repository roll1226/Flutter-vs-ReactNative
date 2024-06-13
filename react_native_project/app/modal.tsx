import { View } from "@/components/Themed";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function ModalScreen() {
  const END_POINT = "https://example.com";

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <WebView source={{ uri: END_POINT }} style={styles.webview} />
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
