import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, ActivityIndicator } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import { Strings } from '../../utils/strings';
import CustomButton from '../../components/CustomButton';
import { useAppActions } from '../../data/app';
import { useAppSelector } from '../../redux/hooks';
import { Colors } from '../../utils/colors';

export default function LoginScreen({navigation}:any) {

  const [ email, setEmail ] = useState<string>('genoma3d@gmail.com');
  const [ password, setPassword ] = useState<string>('12345678');
  const AppActions = useAppActions();
  const { loading } = useAppSelector(state => state.app);

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
    {
      loading ? <ActivityIndicator style={styles.activityIndicator} color={Colors.White} /> : <CustomButton
        label={Strings.login}
        style={styles.buttonStyle}
        onPress={()=>loginAction()}
      />
    }
  </View>)
}
