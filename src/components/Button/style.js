import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.color.primary,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },

    title: {
        flex: 1,
        fontSize: 17,
        fontFamily: theme.fonts.text500,
        textAlign: 'center',
        color: theme.color.heading,
    },
})