import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

import { style } from "./style";

import { GuildIcon } from "../GuildIcon";
import { theme } from "../../global/styles/theme";

export function Guild({data, ...settings}) {
    return (
        <TouchableOpacity
        style={style.container}
        activeOpacity={0.7}
        {...settings}
        >
            <GuildIcon />

            <View style={style.content}>
                <Text style={style.title}>
                    {data.name}
                </Text>

                <Text style={style.role}>
                    {data.owner ? 'Administrador' : 'Convidado'}
                </Text>
            </View>

            <Feather
            name="chevron-right"
            color={theme.color.heading}
            size={24}
            />

        </TouchableOpacity>
    )
}
