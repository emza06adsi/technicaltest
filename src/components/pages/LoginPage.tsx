import React from 'react';
import {View, StyleSheet} from 'react-native';
import LoginForm from '../molecules/LoginForm';
import {useNavigation} from '@react-navigation/native';
import { Linking } from 'react-native';


const LoginPage: React.FC = () => {
  const navigation = useNavigation();

  const handleLoginSubmit = (email: string, password: string) => {
    // console.log(`Correo electrónico: ${email}, Contraseña: ${password}`);
    navigation.navigate('Home' as never);
    
  };

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={handleLoginSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginPage;
