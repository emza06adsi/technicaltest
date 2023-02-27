import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../components/pages/LoginPage';
import {RootState} from '../redux/reducers/rootReducer';
import {connect, useSelector} from 'react-redux';
import {StatusBar} from 'react-native';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Homess Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Navigator: React.FC<any> = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  useEffect(() => {
    StatusBar.setBackgroundColor('#339bcf');
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(false);
  }, []);

  useEffect(() => {
    isLoggedIn;
  }, [isLoggedIn]);

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginPage}
          />
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          />
        )}
      </Stack.Navigator>
    </View>
  );
};

export default Navigator;
