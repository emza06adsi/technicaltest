import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/Login'

const Stack = createStackNavigator()

const GlobalStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
    </Stack.Navigator>
)
  
export default GlobalStackNavigator
  