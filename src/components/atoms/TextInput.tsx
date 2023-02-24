import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

interface TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, onChangeText }) => {
  return (
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

export default TextInput;
