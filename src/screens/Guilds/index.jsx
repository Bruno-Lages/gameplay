import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { getBottomSpace,  } from "react-native-iphone-x-helper";
import { useState } from "react/cjs/react.development";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";

import { api } from './../../services/api';

export function Guilds({handleGuildSelect}) {

    const [guilds, setGuilds] = useState([]);

    const [loading, setLoading] = useState(true);
    
    async function fetchData() {
        const response = await api.get('/users/@me/guilds');

        setGuilds(response.data);

        setLoading(false);
    }

    useEffect(() => {
        async function asyncInsideEffect() {
            await fetchData();
        }
        asyncInsideEffect();
    }, []);
    
    return (
        <View>
            {
                loading ? <Load />
                : <FlatList
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
            }
        </View>
    )
}
