import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { style } from "./style";
import { useAuth } from './../../hooks/auth'

export function Profile() {

    const { user } = useAuth();

    return (
        <View style={style.container}>

            <Avatar url={user.avatar} />

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