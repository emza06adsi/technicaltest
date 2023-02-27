import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import TextInput from '../atoms/TextInput';
import Svg, {Path, Rect} from 'react-native-svg';
interface PasswordInputProps {
  handlePasswordChange: any;
}

const LoginOption: React.FC<any> = () => {
  const [showUserIcon, setShowUserIcon] = useState(true);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => setShowUserIcon(!showUserIcon)}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            top: 10,
            left: -20,
            right: 0,
            bottom: 0,
            zIndex: 10,
            elevation: 10,
          }}>
          <Svg width={30} height={30} viewBox="0 0 24 24">
            
          </Svg>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowUserIcon(!showUserIcon)}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            top: 10,
            left: 10,
            right: 0,
            bottom: 0,
            zIndex: 10,
            elevation: 10,
          }}>
          <Svg width={30} height={30} viewBox="0 0 24 24"></Svg>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginOption;
