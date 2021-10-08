import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({

    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 5,
    },

    title: {
        fontFamily: theme.fonts.title700,
        color: theme.color.heading,
        fontSize: 18,
    },

    subtitle: {
        fontFamily: theme.fonts.text400,
        color: theme.color.highlight,
        fontSize: 13,
    },

    gradient: {
        borderRadius: 8,
    },

    textArea: {
        borderRadius: 8,
        backgroundColor: 'transparent',
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.color.heading,
        borderWidth: 1,
        borderColor: theme.color.secondary50,
        padding: 20,
        textAlignVertical: 'top'
    }
})