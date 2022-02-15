import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import { Strings } from '../../utils/strings';
import CustomButton from '../../components/CustomButton';
import { useAppSelector } from 'redux/hooks';
import { useAppActions } from '../../data/app';

export default function LoginScreen({navigation}:any) {

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const AppActions = useAppActions();

  const loginAction = () => {
    AppActions.loginUser({email, password})
  }

  return (<View style={styles.container}>
    <CustomTextInput
      label={Strings.email}
      placeholder={`${Strings.introduceYour} ${Strings.email}`}
      containerStyle={styles.mailInput}
      value={email}
      onChangeText={(newEmail)=>setEmail(newEmail)}
      onSubmit={()=>{}}
    />
    <CustomTextInput
      label={Strings.password}
      placeholder={`${Strings.introduceYour} ${Strings.password}`}
      containerStyle={styles.passwordInput}
      value={password}
      onChangeText={(newPass)=>setPassword(newPass)}
      onSubmit={()=>loginAction()}
    />
    <CustomButton
      label={Strings.login}
      style={styles.buttonStyle}
      onPress={()=>loginAction()}
    />
  </View>)
}
