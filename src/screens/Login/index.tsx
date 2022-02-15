import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';

export default function LoginScreen() {
  return (<View style={styles.container}>
    <CustomTextInput
      label='Correo electrónico'
    />
  </View>)
}
