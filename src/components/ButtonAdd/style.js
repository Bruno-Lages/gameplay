import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        borderRadius: 8,
        backgroundColor: theme.color.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
})