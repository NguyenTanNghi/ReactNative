import { Stack } from "expo-router";
import { useEffect } from "react";
import { initDatabase } from "./utils/db";

export default function RootLayout() {
    useEffect(() => {
        initDatabase().catch(console.error);
    }, []);

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        />
    );
}
