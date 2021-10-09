import React from "react";
import { FlatList, View } from "react-native";
import { getBottomSpace,  } from "react-native-iphone-x-helper";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

export function Guilds({handleGuildSelect}) {

    const guilds = [
        {
          id: '1',
          name: 'Lendários',
          icon: 'image.png',
          owner: true
        },
        {
          id: '2',
          name: 'Galera do Game',
          icon: undefined,
          owner: false
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
          },
          {
            id: '4',
            name: 'Galera do Game',
            icon: undefined,
            owner: false
          },
          {
            id: '5',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
          },
          {
            id: '6',
            name: 'Galera do Game',
            icon: undefined,
            owner: false
          },
          {
            id: '7',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
          },
          {
            id: '8',
            name: 'Galera do Game',
            icon: undefined,
            owner: false
          },
          {
            id: '9',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
          },
          {
            id: '10',
            name: 'Galera do Game',
            icon: undefined,
            owner: false
          },
      ];
    
    return (
        <View>
            <FlatList
            data={guilds}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Guild 
                data={item} 
                onPress={() => handleGuildSelect(item)} 
                />)}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            ListHeaderComponent={() => <ListDivider isCentered />}
            contentContainerStyle={{ paddingBottom: getBottomSpace() + 69 }}
            />
        </View>
    )
}
