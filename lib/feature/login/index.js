import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BtnLogin} from '../../core/constants/colors';
import styles from './components/styles';
import {fechLogin} from '../../core/redux/actions/login';

import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const LoginView = ({navigation}) => {
  const dispatch = useDispatch();
  const loginSTATE = useSelector(store => store.LoginState);
  let userLog = {
    email: '',
    password: '',
  };

  useEffect(() => {
    if (loginSTATE.data !== null) {
      navigation.navigate('home');
    }
  });

  const _login = _ => {
    dispatch(fechLogin(userLog));
  };

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <View style={styles.loginContent}>
          <View>
            <Text style={styles.text}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => (userLog.email = value.toLowerCase())}
            />
          </View>
          <View style={styles.divider}>
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={value => (userLog.password = value.toLowerCase())}
            />
          </View>
          <TouchableOpacity
            onPress={_login}
            color={BtnLogin}
            style={styles.btnLogin}>
            {loginSTATE.loading ? (
              <ActivityIndicator
                size="small"
                color="#FFF"
                style={styles.loading}
              />
            ) : (
              <Text style={styles.btnText}>Ingresar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginView;
