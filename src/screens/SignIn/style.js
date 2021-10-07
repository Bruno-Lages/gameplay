import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: 360,
    },

    content: {
        marginTop: -40,
        paddingHorizontal: 50,
    },

    tittle: {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize: 40,
        lineHeight: 40,
        marginBottom: 14,
        fontFamily: theme.fonts.title700
    },
    
    subtittle: {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize: 15,
        lineHeight: 25,
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
    }
})