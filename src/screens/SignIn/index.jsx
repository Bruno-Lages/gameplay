import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";

import Illustration from './../../assets/illustration.png'

import { useAuth } from '../../hooks/auth';
import { style } from "./style";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from '../../components/Background'
import { theme } from '../../global/styles/theme';
export function SignIn() {

    const { signIn, loading } = useAuth();

    function handleSignIn() {
        try{
            signIn();
        }catch(e){
            return Alert.alert('erro na autenticação');
        }
    }

    return (
        <Background>
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
    
                    {
                        loading 
                        ? <ActivityIndicator color={theme.color.primary} />
                        : <ButtonIcon onPress={handleSignIn}>Entrar com Discord</ButtonIcon>
                    }
                </View>
    
            </View>
        </Background>
    );
}
