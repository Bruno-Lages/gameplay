import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        width: 64,
        height: 64,
        borderRadius: 8,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.color.discord,
        overflow: 'hidden',
    },
    
    image: {
        width: 64,
        height: 64,
      },
})