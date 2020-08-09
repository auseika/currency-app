/**
 * Currency converter RN app
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@Screens/Home';
import Currencies from '@Screens/Currencies';
import CurrencyDetails from '@Screens/CurrencyDetails';

// perf stuff goes here
enableScreens();

const App: () => React.ReactNode = () => {
    // currencies stack
    const CurrenciesStack = createStackNavigator();

    function CurrenciesStackScreen() {
        return (
            <CurrenciesStack.Navigator>
                <CurrenciesStack.Screen name="Currencies" component={Currencies} />
                <CurrenciesStack.Screen name="CurrencyDetails" component={CurrencyDetails} />
            </CurrenciesStack.Navigator>
        );
    }

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Currencies" component={CurrenciesStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
