import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, TextInput } from "react-native";
import { theme } from "../../global/styles/theme";
import { style } from "./style";

export function TextArea({title, subtitle, ...settings}) {
    return (
        <View>
                    
                <View
                style={style.header}
                >
                    <Text style={style.title}>
                        {title}
                    </Text>

                    <Text style={style.subtitle}>
                        {subtitle}
                    </Text>
                </View>
    
                <LinearGradient
                colors={[theme.color.secondary40, theme.color.secondary50]}
                style={style.gradient}
                >
                    <TextInput
                    multiline
                    maxLength={100}
                    numberOfLines={6}
                    autoCorrect={false}
                    style={style.textArea}
                    {...settings}
                    />
                </LinearGradient>
    
        </View>
    )
}
