import React from 'react';
import { View } from 'react-native';

import { style } from './style';

export function ListDivider({isCentered}){
    return (
        <View 
        style={[
            style.container,
            isCentered
            ? { marginVertical: 12, }
            : {marginTop: 2, marginBottom: 31,}
        ]}
        />
    );
}