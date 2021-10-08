import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { style } from './style';

export function Button({children, ...RectButtonProps}) {
    return (
        <RectButton style={style.container} {...RectButtonProps} >
                <Text style={style.title}>
                    {children}
                </Text>
        </RectButton>
    )
}
