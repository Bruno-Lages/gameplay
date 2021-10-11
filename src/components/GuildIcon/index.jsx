import React from "react";
import { Image, View } from "react-native";
import { style } from "./style";

import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

export function GuildIcon({guildId, iconId}) {

    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <View style={style.container}>
            {   
                iconId 
                ? <Image 
                style={style.image}
                source={{uri}}
                />        
                :  <DiscordSvg 
                width={40} 
                height={40}
                />
        }
        </View>
    )
}