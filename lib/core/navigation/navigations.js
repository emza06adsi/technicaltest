import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginView from '../../feature/login/index';
import HomeView from '../../feature/home/index';
import * as React from 'react';

const Stack = createNativeStackNavigator();

const NavigationViews = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={LoginView}
          options={{headerShown: false}}
        />
        <Stack.Screen name="home" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationViews;
