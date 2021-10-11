import React from 'react';

import {
    ActivityIndicator,
  View
} from 'react-native';
import { theme } from '../../global/styles/theme';

import { style } from './style';

export function Load(){
  return (
    <View>
        <ActivityIndicator 
        size="large"
        color={theme.color.primary}
        />
    </View>
  );
}