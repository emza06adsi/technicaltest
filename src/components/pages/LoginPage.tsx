import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../molecules/LoginForm';

const LoginPage: React.FC = () => {
  const handleLoginSubmit = (email: string, password: string) => {
    // Aquí se puede agregar la lógica de autenticación
    console.log(`Correo electrónico: ${email}, Contraseña: ${password}`);
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
