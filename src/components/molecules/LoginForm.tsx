import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';
import EmailInput from '../templates/EmailInput';
import PasswordInput from '../templates/PasswordInput';
import LoginOption from '../templates/LoginOption';
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
        style={{width: 100, height: 100, marginBottom: 30}}
      />
      <Text style={styles.title}>Bienvenido a Keando</Text>
      <EmailInput handleEmailChange={handleEmailChange} />
      <PasswordInput handlePasswordChange={handlePasswordChange} />
      <Button title="Ingresar" onPress={handleSubmit} />
      <Text style={styles.forgotPasswordText}>
        ¿Has olvidado tu contraseña?
      </Text>
      <Text style={styles.loginOption}>
        ------------------ O inicia con ------------------
      </Text>
      <LoginOption />
      <Text style={styles.loginOption}>
        No tienes una cuenta? <Text style={{color:'#61b4de'}}> Crea una</Text>
      </Text>
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
    marginBottom: 30,
    color: '#61b4de',
    fontFamily: 'System',
  },
  forgotPasswordText: {
    fontSize: 16,
    marginTop: 10,
    color: '#FFFFFF',
    fontFamily: 'System',
  },
  loginOption: {
    fontSize: 16,
    marginTop: 30,
    color: '#FFFFFF',
    fontFamily: 'System',
  },
});

export default LoginForm;
