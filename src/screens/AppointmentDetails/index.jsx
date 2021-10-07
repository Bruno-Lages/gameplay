import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import {Background} from './../../components/Background';
import {ListHeader} from './../../components/ListHeader';
import {ListDivider} from './../../components/ListDivider';
import { ButtonIcon } from './../../components/ButtonIcon'
import { Fontisto } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";
import { FlatList, ImageBackground, Text, View } from "react-native";
import BannerImg from '../../assets/banner.png';
import { style } from "./style";
import { Member } from "../../components/Member";

export function AppointmentDetails() {
    
    const members = [
        {
          id: '1',
          username: 'Bruno',
          avatar_url: 'https://avatars.githubusercontent.com/u/73563154?v=4',
          status: 'online'
        },
        {
          id: '2',
          username: 'Bruno',
          avatar_url: 'https://avatars.githubusercontent.com/u/73563154?v=4',
          status: 'offline'
        }
      ]

    return (
        <Background>
            <Header 
            title="Detalhes"
            action={
                <BorderlessButton>
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
                        title
                    </Text>

                    <Text style={style.subtitle}>
                        subtitle
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
            title="Jogadores"
            subtitle="2 usuários"
            />

            <FlatList
            data={members}
            keyExtractor={(item) => item.id }
            ItemSeparatorComponent={() => <ListDivider />}
            style={style.members}
            renderItem={({item}) => <Member data={item} />}
            />

            <View style={style.footer}>
                <ButtonIcon>Entrar no servidor do Discord</ButtonIcon>
            </View>

        </Background>
    )
}
