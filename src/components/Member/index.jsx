import React from "react";
import { View, Text } from "react-native";

import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';
import { style } from "./style";

export function Member({ data }){
    const isOnline = data.status === 'online';
  
    return (
      <View style={style.container}>
        <Avatar url={data.avatar_url} />
  
        <View>
          <Text style={style.title}>
            { data.username }
          </Text>
  
          <View style={style.status}>
            <View 
              style={[
                style.bulletStatus,
                {
                  backgroundColor: isOnline ? theme.color.on : theme.color.primary
                }
              ]}
            />
  
            <Text style={style.nameStatus}>
              { isOnline ? 'Disponível' : 'Ocupado' }
            </Text>
          </View>
        </View>
      </View>
    );
  }