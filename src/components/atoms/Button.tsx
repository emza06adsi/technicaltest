import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#61b4de',
    borderRadius: 100,
    padding: 20,
    width:300,
    marginVertical: 10,
    marginTop:50,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    textAlign: 'center',

  },
});

export default Button;
