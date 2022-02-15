import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import GlobalStackNavigator from 'navigation/main-navigation';

export default function App() {

  return <NavigationContainer> 
      <StatusBar translucent/>
      <GlobalStackNavigator />
    </NavigationContainer>
}
