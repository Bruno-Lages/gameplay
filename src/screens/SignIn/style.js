import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        backgroundColor: theme.color.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        marginTop: -40,
        paddingHorizontal: 50,
    },

    tittle: {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 14
    },
    
    subtittle: {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64
    }
})