import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import TextInput from '../atoms/TextInput';
import Svg, {Path, Rect} from 'react-native-svg';
interface PasswordInputProps {
  handlePasswordChange: any;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  handlePasswordChange,
}) => {
  const [showUserIcon, setShowUserIcon] = useState(true);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
      }}>
      <TouchableOpacity onPress={() => setShowUserIcon(!showUserIcon)}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: -35,
            left: -10,
            right: 0,
            bottom: 0,
            zIndex: 10,
            elevation:10
          }}>
          <Svg width={50} height={50} viewBox="0 0 24 24">
            <Rect x="3" y="10" width="18" height="10" rx="2" />
            <Path
              fill="none"
              stroke={'#3acce1'}
              strokeWidth="2"
              d="M17,9H16V7c0-3.31-2.69-6-6-6S4,3.69,4,7v2H3c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V11C19,9.9,18.1,9,17,9z"
            />
          </Svg>
        </View>
      </TouchableOpacity>
      <TextInput
        placeholder="pasword"
        onChangeText={handlePasswordChange}
      />
    </View>
  );
};

export default PasswordInput;
