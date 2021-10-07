import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { GuildIcon } from "../GuildIcon";
import { categories } from '../../utils/categories';


import { style } from "./style";
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { theme } from "../../global/styles/theme";

export function Appointment({data, ...RectButtonProps}) {

    const [category] = categories.filter((item) => item.id === data.category);
    const { owner } = data.guild

    return (
        <RectButton {...RectButtonProps}>
            <View style={style.container}>
                <GuildIcon />

                <View style={style.content}>
                    <View style={style.header}>
                        <Text style={style.title}>
                            { data.guild.name }
                        </Text>

                        <Text style={style.category}>
                            { category.title }
                        </Text>
                    </View>

                    <View style={style.footer}>
                        <View style={style.dateInfo}>
                            <CalendarSvg />

                            <Text style={style.date}>
                                { data.date }                
                            </Text>
                        </View>

                        <View style={style.playersInfo}>
                            <PlayerSvg fill={ owner ? theme.color.primary : theme.color.on}/>

                            <Text style={[
                            style.player, 
                            { color: owner ? theme.color.primary : theme.color.on }
                            ]}>
                            { owner ? 'Anfitrião' : 'Visitante' }
                            </Text>
                        </View>          
                    </View>
                </View>
            </View>
        </RectButton>
    )
}
