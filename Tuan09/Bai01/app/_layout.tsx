import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SQLiteProvider } from "../context/SQLiteContext";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SQLiteProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#00BDD5" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="task" options={{ headerTitle: "Todo App" }} />
          <Stack.Screen name="add" options={{ headerTitle: "Add / Edit Task" }} />
        </Stack>
      </SQLiteProvider>
    </SafeAreaProvider>
  );
}
