import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { theme } from '../global/styles/theme';
import { AppointmentDetails } from '../screens/AppointmentDetails';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
        screenOptions={{
            headerShown: false,
        cardStyle: {
          backgroundColor: theme.color.secondary100,
        }
      }}
        >
            <Screen 
            name="SignIn"
            component={SignIn}
            />
            <Screen
            name="Home"
            component={Home}
            />
            <Screen
            name="AppointmentDetails"
            component={AppointmentDetails}
            />
        </Navigator>
    )
}