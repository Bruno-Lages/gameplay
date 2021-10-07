import React from 'react';
import { View, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Illustration from './../../assets/illustration.png'

import { style } from "./style";
import { ButtonIcon } from "../../components/ButtonIcon";
export function SignIn() {

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <View style={style.container}>
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

                <ButtonIcon 
                onPress={handleSignIn}>Entrar com Discord</ButtonIcon>
            </View>

        </View>
    );
}
