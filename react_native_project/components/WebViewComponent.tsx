import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const WebViewComponent: React.FC = () => {
  return <WebView source={{ uri: "https://yahoo.co.jp" }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewComponent;
