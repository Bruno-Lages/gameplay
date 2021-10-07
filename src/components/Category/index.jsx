import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { style } from "./style";
import Svg from "react-native-svg";

export function Category({tittle, checked, Svg, ...RectButtonProps}) {
    return (
        <RectButton {...RectButtonProps}>
            <LinearGradient
            style={style.container}
            colors={[theme.color.secondary40, theme.color.secondary70]}
            >
                <View style={[style.content, { opacity: checked ? 1 : 0.4 }]}>
                
                    <View style={ checked ? style.checked : style.check }/>

                    <Svg  
                    width={48} 
                    height={48} />

                    <Text style={style.title}>
                    { tittle }
                    </Text>

                </View>
            </LinearGradient>
        </RectButton>
    )
}
