import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';
import EmailInput from '../templates/EmailInput';
import PasswordInput from '../templates/PasswordInput';
interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({onSubmit}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    onSubmit(email, password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.jpeg')}
        style={{width: 100, height: 100, marginBottom: 50}}
      />

      <Text style={styles.title}>Bienvenido a keando</Text>
      <EmailInput handleEmailChange={handleEmailChange}/>
      <PasswordInput handlePasswordChange={handlePasswordChange} />
      {/* <TextInput placeholder="Contraseña" onChangeText={handlePasswordChange} /> */}
      <Button title="Iniciar sesión" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#61b4de',
    fontFamily: 'System',
  },
});

export default LoginForm;
