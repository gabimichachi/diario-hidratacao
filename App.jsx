import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import { Header } from "./src/components/Header";
import { WaterProgress } from "./src/components/WaterProgress";

export default function App() {
    const GOAL = 2000;
    const CONSUMIDO = 200;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto" />

                <View style={styles.container}>
                    <Header goal={GOAL} />

                    <WaterProgress
                        consumido={CONSUMIDO}
                        objetivo={GOAL}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = {
    container: {
        flex: 1,
    },
};