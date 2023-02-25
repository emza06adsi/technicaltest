import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../components/pages/LoginPage';
import {RootState} from '../redux/reducers/rootReducer';
import {connect, useSelector} from 'react-redux';
import {AuthState} from '../redux/reducers/authReducer';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Homess Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

// interface Props {
//   isLoggedIn: boolean;
// }

const Navigator: React.FC<any> = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  useEffect(() => {
    isLoggedIn;
  }, [isLoggedIn]);

  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen name="Login" component={LoginPage} />
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
};

// const mapStateToProps = (state: RootState) => {
//   return {
//     isLoggedIn: state.auth.isLoggedIn,
//   };
// };

export default Navigator;
