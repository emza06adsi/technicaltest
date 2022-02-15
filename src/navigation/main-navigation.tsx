import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'

const Stack = createStackNavigator()

const GlobalStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
)
  
export default GlobalStackNavigator
  