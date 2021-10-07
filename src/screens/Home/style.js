import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const style = StyleSheet.create({
    
    container: {
        flex: 1,
    },
    
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    },

    categories: {
        // height: 100,
    },

    content: {
        marginTop: 42
    },

    matches: {
        marginTop: 24,
        marginLeft: 24
    },
    
})