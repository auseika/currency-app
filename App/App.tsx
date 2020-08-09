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

// perf stuff goes here
enableScreens();

const App: () => React.ReactNode = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator headerMode={'none'}> */}
            {/* <Stack.Screen name="Home" component={Home} /> */}
            {/* </Stack.Navigator> */}
        </NavigationContainer>
    );
};

export default App;
