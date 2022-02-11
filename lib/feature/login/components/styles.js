import {StyleSheet} from 'react-native';
import {BtnLogin, BackgoundLogin} from '../../../core/constants/colors';
import {W_WIDTH, W_HEIGHT} from '../../../core/constants/dimentions';

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: BtnLogin,
    height: 40,
    width: W_WIDTH * 0.7,
    marginTop: 50,
    borderRadius: 20,
    alignSelf: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
  },
  divider: {
    marginTop: 40,
  },
  input: {
    height: 40,
    borderBottomColor: '#FFF',
    color: '#FFF',
    borderBottomWidth: 1,
  },
  view: {
    backgroundColor: BackgoundLogin,
    width: W_WIDTH,
    height: W_HEIGHT,
    justifyContent: 'center',
  },
  loginContent: {
    margin: 20,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
  btnText: {
    color: '#FFF',
    fontSize: 18,
    marginTop: 7,
    alignSelf: 'center',
  },
});

export default styles;
