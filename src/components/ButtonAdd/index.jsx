import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { style } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";

export function ButtonAdd({...RectButtonProps}) {
    return (
        <RectButton
        style={style.container}
        {...RectButtonProps}
        >
            <MaterialCommunityIcons
            name="plus"
            color={theme.color.heading}
            size={24}
            />
        </RectButton>
    )
}