import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { style } from './style';

import DiscordImg from './../../assets/discord.png'

export function ButtonIcon({children, ...RectButtonProps}) {
    return (
        <RectButton style={style.container} {...RectButtonProps} >
                <View style={style.iconWrapper}>
                    <Image source={DiscordImg} style={style.icon} />
                </View>

                <Text style={style.tittle}>
                    {children}
                </Text>
        </RectButton>
    )
}
