import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { style } from "./style";

export function Avatar({url}) {
    return (
        <LinearGradient
        colors={[theme.color.secondary40, theme.color.secondary70]}
        style={style.container}
        >
            <Image 
            source={{uri:url}}
            style={style.image}
            />
        </LinearGradient>
    );
}