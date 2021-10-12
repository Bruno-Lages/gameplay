import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView, ScrollView, Platform, Modal, ActivityIndicator } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import uuid from 'react-native-uuid';

import { style } from "./style";
import { theme } from "../../global/styles/theme";

import {Background} from './../../components/Background';
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildIcon } from "../../components/GuildIcon";

import { COLLECTION_APPOINTMENTS } from '../../config/database';

import DateTimePicker from '@react-native-community/datetimepicker';
import { DataTimeForm } from "../../components/DataTimeForm";

export function AppointmentCreate() {

    const [category, setCategory] = useState('');

    const [openGuildsModal, setOpenGuildsModal] = useState(false);

    const [guild, setGuild] = useState({});

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();    
    
    function handleCategorySelect(categoryId) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleOpenGuildsModal() {
        setOpenGuildsModal(true);
    }

    function handleCloseGuildsModal() {
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(selectedGuild) {
        setGuild(selectedGuild);
        setOpenGuildsModal(false);
    }

    async function handleSave() {
        
        setLoading(true);
        
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${date} às ${time}`,
            description,
        };

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];
        await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment]));


        setLoading(false);
        
        navigation.navigate('Home');

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
                                    ? <GuildIcon guildId={guild.id} iconId={guild.icon} />
                                    : <View style={style.image} />
                                }
        
                                <View style={style.selectBody}>
                                    <Text style={style.label}>
                                        {
                                            guild.name ?? 'Selecione um servidor'
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
        
                        <DataTimeForm 
                        date={date}
                        setDate={setDate} 
                        setTime={setTime}
                        time={time}
                        />
        
                        <TextArea
                        title="Descrição"
                        subtitle="Max 100 caracteres"
                        onChangeText={setDescription}
                        />
        
        
                        <View style={style.button}>
                            {
                                loading
                                ? <View style={style.loadingButton}>
                                    <ActivityIndicator 
                                    color={theme.color.heading}
                                    />
                                </View>
                                : <Button
                                onPress={() => handleSave()}>
                                    Agendar
                                </Button>
                            }
                        </View>
                        
                    </View>
        
                </Background>
            </ScrollView>

            <ModalView
            visible={openGuildsModal}
            closeModal={handleCloseGuildsModal}
            >
                <Guilds 
                handleGuildSelect={handleGuildSelect}
                />
            </ModalView>

        </KeyboardAvoidingView>
    )
}
