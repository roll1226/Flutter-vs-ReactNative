import { useColorScheme } from "@/components/useColorScheme";
import { Stack } from "expo-router";
import React from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function SearchLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "検索画面",
        }}
      />
    </Stack>
  );
}
