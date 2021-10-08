import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,

    },

    content: {
        flex: 1,
    },

    title: {
        fontFamily: theme.fonts.title700,
        color: theme.color.heading,
        fontSize: 18,
        marginBottom: 11,
    },

    role: {
        fontFamily: theme.fonts.text400,
        color: theme.color.highlight,
        fontSize: 13,
    }
})
