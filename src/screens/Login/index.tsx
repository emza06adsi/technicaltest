import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import { Strings } from '../../utils/strings';
import CustomButton from '../../components/CustomButton';

export default function LoginScreen() {
  return (<View style={styles.container}>
    <CustomTextInput
      label={Strings.email}
      placeholder={`${Strings.introduceYour} ${Strings.email}`}
      containerStyle={styles.mailInput}
    />
    <CustomTextInput
      label={Strings.password}
      placeholder={`${Strings.introduceYour} ${Strings.password}`}
      containerStyle={styles.passwordInput}
    />
    <CustomButton
      label={Strings.login}
      style={styles.buttonStyle}
    />
  </View>)
}
