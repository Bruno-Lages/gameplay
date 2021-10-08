import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        width: 150,
        height: 48,
        borderRadius: 8,
    },
    
    input: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: 'transparent',
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.color.heading,
        borderWidth: 1,
        borderColor: theme.color.secondary50,
        textAlign: 'center',
    }
})