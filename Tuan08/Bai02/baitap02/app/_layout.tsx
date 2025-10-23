import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "#00BDD5" },
                    headerTintColor: "white",
                    headerTitleStyle: { fontWeight: "bold" },
                }}
            >
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen
                    name="task"
                    options={{
                        headerTitle: "Todo App",
                        headerBackTitle: "Back",
                    }}
                />
                <Stack.Screen
                    name="add"
                    options={{
                        headerTitle: "Todo App",
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    );
}
