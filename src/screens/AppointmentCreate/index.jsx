import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView, ScrollView, Platform, Modal } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'

import { style } from "./style";
import { theme } from "../../global/styles/theme";

import {Background} from './../../components/Background';
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildIcon } from "../../components/GuildIcon";


export function AppointmentCreate() {

    const [category, setCategory] = useState('');

    const [openGuildsModal, setOpenGuildsModal] = useState(false);

    const [guild, setGuild] = useState({});

    function handleCategorySelect(categoryId) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleOpenGuildsModal() {
        setOpenGuildsModal(true);
    }

    function handleGuildSelect(selectedGuild) {
        setGuild(selectedGuild);
        setOpenGuildsModal(false);
    }

    return (

        <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <Background>
                    <Header 
                    title="Agendar partida"
                    />
        
                    <Text style={[style.label, {paddingLeft: 24}]}>
                        Categoria
                    </Text>
        
                    <View style={style.categories}>
                        <CategorySelect 
                        categorySelected={category}
                        hasCheckbox
                        setCategory={handleCategorySelect}/>
                    </View>
        
                    <View style={style.form}>
                        <RectButton
                        onPress={() => handleOpenGuildsModal()}
                        >
                            <View style={style.select}>
                                {
                                    guild.icon
                                    ? <GuildIcon />
                                    : <View style={style.image} />
                                }
        
                                <View style={style.selectBody}>
                                    <Text style={style.label}>
                                        {
                                            guild.name ?
                                            guild.name
                                            : 'Selecione um servidor'
                                        }
                                    </Text>
                                </View>
        
                                <Feather
                                name="chevron-right"
                                color={theme.color.heading}
                                size={18}
                                />
        
                            </View>
                        </RectButton>
        
                        <View style={style.formField}>
        
                            <View style={style.column}>
                                <Text style={style.label}>
                                    Dia e mês
                                </Text>
        
                                <SmallInput
                                separator="/"
                                placeholder="dd/mm"
                                />
        
                            </View>
        
                            <View style={style.column}>
        
                                <Text style={style.label}>
                                    Horário
                                </Text>
                                
                                <SmallInput
                                separator=":"
                                placeholder="hh:mm"
                                />
            
                            </View>
                        </View>
        
                        <TextArea
                        title="Descrição"
                        subtitle="Max 100 caracteres"
                        />
        
        
                        <View style={style.button}>
                            <Button>
                                Agendar
                            </Button>
                        </View>
                        
                    </View>
        
                </Background>
            </ScrollView>

            <ModalView
            visible={openGuildsModal} 
            >
                <Guilds 
                handleGuildSelect={handleGuildSelect}
                />
            </ModalView>

        </KeyboardAvoidingView>
    )
}
