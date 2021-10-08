import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    overlay: {
        backgroundColor: theme.color.overlay,
        flex: 1,
    },
    
    container: {
        flex: 1,
        marginTop: 50,
        // backgroundColor: 'red',
    },
    
    bar: {
        width: 40,
        height: 5,
        borderRadius: 5,
        backgroundColor: theme.color.secondary30,
        marginTop: 13,
        marginBottom: 30,
        alignSelf: 'center',
    }
})