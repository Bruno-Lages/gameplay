import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Category } from "../../components/Category";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { style } from "./style";

export function Home() {

    const [category, setCategory] = useState('');

    const appointments = [
        {
          id: '1',
          guild: {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: false
          },
          category: '1',
          date: '22/06 às 20:40h',
          description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
        },
        {
          id: '2',
          guild: {
            id: '2',
            name: 'Lendários',
            icon: null,
            owner: true
          },
          category: '2',
          date: '22/06 às 20:40h',
          description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
        },
        
      ]

    function handleCategorySelect(categoryId) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View>
            <View
            style={style.header}
            >
                <Profile />
                <ButtonAdd />
            </View>

            <View style={style.categories}>
                <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}/>
            </View>

            <View
            style={style.content}
            >
                <ListHeader 
                title="Partidas agendadas" 
                subtitle="Total 6"
                />

                <FlatList
                data={appointments}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Appointment data={item} /> }
                style={style.matches}
                ItemSeparatorComponent={() => <ListDivider />}
                showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}