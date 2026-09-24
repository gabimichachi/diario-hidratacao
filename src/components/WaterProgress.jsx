import { Text, View } from "react-native";

export function WaterProgress({ consumido, objetivo }) {
    const porcentagem = (consumido / objetivo) * 100;

    return (
        <View>
            <Text>Você bebeu {consumido}ml de água hoje.</Text>
            <Text>Você atingiu {porcentagem}% da Meta.</Text>

            {/* Barra Azul */}
            <View>
                <View />
            </View>
        </View>
    );
}