import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    user: {
        flexDirection: 'row',
    },
    
    greeting: {
        color: theme.color.heading,
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        marginRight: 5,
    },
    
    username: {
        color: theme.color.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 24,
    },

    message: {
        color: theme.color.heading,
        fontFamily: theme.fonts.text400,
    }
})