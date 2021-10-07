import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
            width: 104,
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            marginRight: 8
      },
      content: {
            width: 100,
            height: 116,
            borderRadius: 8,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20
      },
      title: {
            fontFamily: theme.fonts.title700,
            color: theme.color.heading,
            fontSize: 15
      },

      check: {
        width: 12,
        height: 12,
        position: 'absolute',
        top: 7,
        right: 7,
        backgroundColor: theme.color.secondary100,
        borderColor: theme.color.secondary50,
        borderWidth: 2,
        borderRadius: 3,
      },
      checked: {
        width: 10,
        height: 10,
        position: 'absolute',
        top: 7,
        right: 7,
        backgroundColor: theme.color.primary,
        borderRadius: 3
      }
});