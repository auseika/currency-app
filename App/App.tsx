/**
 * Currency converter RN app
 *
 * @format
 * @flow strict-local
 */
import { enableScreens } from 'react-native-screens';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// perf stuff goes here
enableScreens();

// import Home from '@Screens/Home';

// const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
