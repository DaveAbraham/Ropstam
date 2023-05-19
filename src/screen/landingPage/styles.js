import {StyleSheet} from 'react-native';
import {LAYOUT} from '../../layout';

export const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
  bgImage: {
    height: '100%',
    width: '100%',
    // resizeMode: 'c',
  },
  containerInner: {
    flex: 1,
  },
  rowItemCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    height: '30%',
    justifyContent: 'center',
    marginTop: LAYOUT.HEIGHT / 50,
    // backgroundColor:"red"
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: LAYOUT.HEIGHT / 5,
  },
  socialBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{marginTop:180,fontFamily:LAYOUT.FONTS.BOLD,textAlign:"center",fontSize:25}
});
