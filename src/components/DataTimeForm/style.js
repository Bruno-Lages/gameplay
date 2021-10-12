import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const style = StyleSheet.create({
    formField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    label: {
        fontSize: 18,
        color: theme.color.heading,
        fontFamily: theme.fonts.title700,
        paddingVertical: 10,
    },
    
    inputContainer: {
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
        textAlignVertical: 'center',
        borderWidth: 1,
        opacity: 0.8,
    }
});