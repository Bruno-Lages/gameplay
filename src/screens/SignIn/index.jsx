import { View, Text, Image, StatusBar } from "react-native";
import React from 'react';

import Illustration from './../../assets/illustration.png'

import { style } from "./style";
import { ButtonIcon } from "../../components/ButtonIcon";
export function SignIn() {
    return (
        <View style={style.container}>
            <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent 
            />
            <Image source={Illustration} style={style.image} />

            <View style={style.content}>
                <Text style={style.tittle}>
                    Organize {'\n'} 
                    suas jogatinas {'\n'} 
                    facilmente
                </Text>

                <Text style={style.subtittle}>
                    Crie grupos para jogar seus jogos {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon activeOpacity={0.8}>Entrar com Discord</ButtonIcon>
            </View>

        </View>
    );
}
