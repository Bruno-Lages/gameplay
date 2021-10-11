import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons'
import { style } from "./style";

export function Header({title, action}) {

    const navigation = useNavigation();

    function handleClick() {
        navigation.goBack();
    }

    return (
        <LinearGradient
        colors={[theme.color.secondary100, theme.color.secondary40]}
        style={style.container}
        >
            <BorderlessButton
            onPress={() => handleClick()}
            style={style.button}
            >
                <Feather
                name={"arrow-left"}
                size={30}
                color={theme.color.heading}
                />
            </BorderlessButton>

            <Text style={style.title}>
                {title}
            </Text>

            {
                action ?
                <View>
                    {action}
                </View>
                : <View 
                width={30}
                />
            }
        </LinearGradient>
    )
}