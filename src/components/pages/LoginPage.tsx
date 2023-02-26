import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import LoginForm from '../molecules/LoginForm';
import {login} from '../../redux/actions/authActions';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Image} from 'react-native';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleLoginSubmit = (email: string, password: string) => {
    dispatch(login(email, password) as any);
  };

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={handleLoginSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
});

export default connect(null, {login})(LoginPage);
