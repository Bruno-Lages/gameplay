import React from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { AuthRoutes } from './authRoute';

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    },
  };
  

export function Routes() {
    return (
        <NavigationContainer
        theme={MyTheme}
        >
            <AuthRoutes />
        </NavigationContainer>
    )
}