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
        margin: 15,
    },

    tittle: {
        flex: 1,
        fontSize: 17,
        textAlign: 'center',
        color: theme.color.heading,
    },

    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.color.line,
    },
})