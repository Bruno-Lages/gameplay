import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
        container: {
            flex: 1,
        },
    
        label: {
            fontSize: 18,
            color: theme.color.heading,
            fontFamily: theme.fonts.title700,
            paddingVertical: 10,
        },

        form: {
            paddingHorizontal: 24,
            marginTop: 32,
        },

        select: {
            flexDirection: 'row',
            width: '100%',
            height: 68,
            borderColor: theme.color.secondary50,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            paddingRight: 25,
        },

        selectBody: {
            flex: 1,
            alignItems: 'center',
        },

        image: {
            width: 68,
            height: 68,
            backgroundColor: theme.color.secondary50,
            // borderWidth: 1,
            borderRadius: 8,
        },

        formField: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },

        textArea: {
            width: '100%',
            borderWidth: 10,
        },

        button: {
            marginVertical: 20,
            marginBottom: 56,
        },

        loadingButton: {
        width: '100%',
        height: 56,
        backgroundColor: theme.color.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        }
})
