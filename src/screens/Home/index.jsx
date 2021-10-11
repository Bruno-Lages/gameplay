import React, { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Load } from "../../components/Load";
import { Background } from '../../components/Background'
import { style } from "./style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { COLLECTION_APPOINTMENTS } from '../../config/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home() {

    const navigation = useNavigation();

    const [category, setCategory] = useState('');

    const [appointments, setAppointments] = useState([]);

    const [loading, setLoading] = useState(true);

    function handleCategorySelect(categoryId) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(selectedGuild) {
        navigation.navigate('AppointmentDetails', { selectedGuild });
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage = response ? JSON.parse(response) : [];

        if(category) {
            setAppointments(storage.filter((item) => item.category === category));
        } else {
            setAppointments(storage);
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
      },[category]));

    return (
        <Background>
            <View
            style={style.header}
            >
                <Profile />
                <ButtonAdd onPress={() => handleAppointmentCreate()} />
            </View>

            <View style={style.categories}>
                <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}/>
            </View>


            {  
                loading ?
                <Load />
                : <>   
                    <ListHeader 
                    title="Partidas agendadas" 
                    subtitle={`Total ${appointments.length}`}
                    />
    
                    <FlatList
                    data={appointments}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => 
                        <Appointment data={item} 
                        onPress={() => handleAppointmentDetails(item)} 
                        /> 
                    }
                    style={style.matches}
                    ItemSeparatorComponent={() => <ListDivider />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 69 }}
                    />
                </>
            }

        </Background>
    )
}
