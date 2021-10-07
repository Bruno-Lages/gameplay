import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { theme } from '../../global/styles/theme';
import { style } from './style';

export function Background({children}) {
    return (
        <LinearGradient
        style={style.container}
        colors={[theme.color.secondary80, theme.color.secondary100]}>
            {children}
        </LinearGradient>
    );
}
