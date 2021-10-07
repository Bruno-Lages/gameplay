import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";

export function ListHeader({title, subtitle}) {
    return (
        <View
        style={style.container}>
            <Text style={style.title}>
                { title }
            </Text>
            <Text style={style.subtitle}>
                { subtitle }
            </Text>
        </View>
    )
}
