import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.development";
import { theme } from "../../global/styles/theme";
import { style } from "./style";

export function SmallInput({separator, ...TextInputProps}) {
    
    const [value, setValue] = useState('');

    return(
        <LinearGradient
        colors={[theme.color.secondary40, theme.color.secondary50]}
            style={style.container}
        >
            <TextInput 
            style={style.input}
            placeholderTextColor={theme.color.highlight}
            keyboardType="numeric"
            maxLength={5}
            onChangeText={
            (newValue) => newValue.length === 2 
                ? setValue(newValue + separator) 
                : setValue(newValue)
            }
            defaultValue={value}
            {...TextInputProps}
            />
        </LinearGradient>
    )
}