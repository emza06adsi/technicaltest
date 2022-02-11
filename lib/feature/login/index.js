import React from 'react';
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

const IndexLogin = ({navigation}) => {
  const dispatch = useDispatch();
  const loginSTATE = useSelector(store => store.LoginState);

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <View style={styles.loginContent}>
          <View>
            <Text style={styles.text}>Correo electrónico</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.divider}>
            <Text style={styles.text}>Contraseña</Text>
            <TextInput style={styles.input} />
          </View>
          <TouchableOpacity
            onPress={() => dispatch(fechLogin())}
            color={BtnLogin}
            style={styles.btnLogin}>
            {loginSTATE.loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.btnText}>Ingresar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IndexLogin;
