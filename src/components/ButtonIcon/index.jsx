import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { style } from './style';

import DiscordImg from './../../assets/discord.png'

export function ButtonIcon({children, ...TouchableOpacityProps}) {
    return (
        <TouchableOpacity style={style.container} {...TouchableOpacityProps}>
                <View style={style.iconWrapper}>
                    <Image source={DiscordImg} style={style.icon} />
                </View>

                <Text style={style.tittle}>
                    {children}
                </Text>
        </TouchableOpacity>
    )
}
