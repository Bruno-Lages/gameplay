import React, { useEffect } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import {Background} from './../../components/Background';
import {ListHeader} from './../../components/ListHeader';
import {ListDivider} from './../../components/ListDivider';
import { ButtonIcon } from './../../components/ButtonIcon'
import { Fontisto } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";
import { Alert, FlatList, ImageBackground, Platform, Share, Text, View } from "react-native";
import BannerImg from '../../assets/banner.png';
import { style } from "./style";
import { Member } from "../../components/Member";
import { useRoute } from "@react-navigation/core";
import { useState } from "react/cjs/react.development";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import * as linking from 'expo-linking';

export function AppointmentDetails() {
    
    const route = useRoute();
    const { guild, description } = route.params.selectedGuild; 

    const [loading, setLoading] = useState(true);

    const [widget, setWidget] = useState({});

    async function fetchData() {
        try{
            const response = await api.get(`/guilds/${guild.id}/widget.json`);
            setWidget(response.data);
        } catch(e) {
            console.log(e);
            Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?');
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {
        const message = Platform.OS === 'ios'
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite,
        });
    }

    function handleOpenGuild(){
        linking.openURL(widget.instant_invite);
    }
    
    useEffect(() => {
        function asyncInEffect() {
            fetchData();
        };
        asyncInEffect();
    }, []);
    
    return (
        <Background>
            <Header 
            title={guild.name}
            action={
                guild.owner &&
                <BorderlessButton
                onPress={handleShareInvitation}>
                    <Fontisto
                    name="share"
                    size={24}
                    color={theme.color.primary}
                    />
                </BorderlessButton>
            }
            />

            <ImageBackground 
            style={style.banner}
            source={BannerImg}
            >
                <View style={style.bannerContent}>
                    <Text style={style.title}>
                        {guild.name}
                    </Text>

                    <Text style={style.subtitle}>
                        {description}
                    </Text>
                </View>
            </ImageBackground>

            {
                loading 
                ? <Load />
                : <>
                    <ListHeader
                    title="Jogadores"
                    subtitle={`Total: ${widget.members.length}`}
                    />
    
                    <FlatList
                    data={widget.members}
                    keyExtractor={(item) => item.id }
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={style.members}
                    renderItem={({item}) => <Member data={item} />}
                    />
                </>
            }

            {
                guild.owner 
                && <View style={style.footer}>
                <ButtonIcon 
                onPress={handleOpenGuild}>
                    Entrar no servidor do Discord
                </ButtonIcon>
            </View>}

        </Background>
    )
}
