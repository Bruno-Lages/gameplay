import React from "react";
import { FlatList, View } from "react-native";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { style } from "./style";

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
        }
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
            ItemSeparatorComponent={() => <ListDivider />}
            style={style.list}
            />
        </View>
    )
}
