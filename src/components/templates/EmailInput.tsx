import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import TextInput from '../atoms/TextInput';
import Svg, {Path} from 'react-native-svg';
interface EmailInputProps {
  handleEmailChange: any;
}
const styles = StyleSheet.create({
  svg: {
    borderRadius: 100,
  },
});

const EmailInput: React.FC<EmailInputProps> = ({handleEmailChange}) => {
  const [showUserIcon, setShowUserIcon] = useState(true);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center',marginBottom:20}}>
      <TouchableOpacity onPress={() => setShowUserIcon(!showUserIcon)}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: -35,
            left: -10,
            right: 0,
            bottom: 0,
            elevation:10,
            zIndex: 10,
            
          }}>
          <Svg width={30} height={30} viewBox="0 0 24 24">
            <Path
              fill={'#3acce1'}
              d="M12,12c3.31,0,6-2.69,6-6s-2.69-6-6-6S6,2.69,6,6S8.69,12,12,12z M12,14.5c-3.67,0-10,1.84-10,5.5v1h20v-1 C22,16.34,15.67,14.5,12,14.5z"
            />
          </Svg>
        </View>
      </TouchableOpacity>
      <TextInput
        placeholder="Correo electrónico"
        onChangeText={handleEmailChange}
      />
    </View>
  );
};

export default EmailInput;
