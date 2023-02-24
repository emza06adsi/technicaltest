import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginPage from './src/components/pages/LoginPage';
import Navigator from './src/navigator/StackNavigator';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenProps = {
  navigation: any;
};

type DetailsScreenProps = {
  navigation: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Text>Details Screen</Text>
      <Navigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
