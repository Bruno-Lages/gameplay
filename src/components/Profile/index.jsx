import React from "react";
import { View, Text, Alert } from "react-native";
import { Avatar } from "../Avatar";
import { style } from "./style";
import { useAuth } from './../../hooks/auth'
import { RectButton } from "react-native-gesture-handler";

export function Profile() {

    const { user, signOut } = useAuth();

    function handleSignOut() {
        Alert.alert('Tem certeza?', 'Deseja mesmo sair do app?', 
        [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: () => signOut(),
            }
        ]
        )
    }

    return (
        <View style={style.container}>

            <RectButton
            onPress={() => handleSignOut()}
            >
                <Avatar url={user.avatar} />
            </RectButton>

                <View>
                    <View style={style.user}>
                        <Text style={style.greeting}>Olá,</Text>
                        <Text style={style.username}>{ user.firstName }</Text>
                    </View>

                    <Text style={style.message}>
                        Hoje é dia de vitória
                    </Text>
                </View>

            </View>
    )
}