import {StyleSheet} from 'react-native'
import { LAYOUT } from "../../layout";

export const styles = StyleSheet.create({
  topTextContainer: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: LAYOUT.HEIGHT / 12,
    marginBottom: LAYOUT.HEIGHT / 16,
  },
  welcomeTxt: {
    color: LAYOUT.COLORS.REDICALRED,
    fontSize: 16,
    fontFamily:LAYOUT.FONTS.SEMI_BOLD
  },
  captionTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: LAYOUT.COLORS.DARKGREY,
  },
  textFieldsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
  },
  forgotPassContainer: {
    alignItems: 'center',
    marginVertical: '5%',
  },
  forgotPassTxt: {
    textAlign: 'center',
    color: LAYOUT.COLORS.P1,
    fontWeight: '700',
  },
  socialBtnsContainer: {
    alignItems: 'center',
  },
  dhatxtContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: LAYOUT.HEIGHT / 90,
    justifyContent: 'center',
  },
  dhaTxt: {
    textAlign: 'center',
    color: LAYOUT.COLORS.DARKGREY,
    fontWeight: '700',
  },
  signupTxt: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: LAYOUT.COLORS.REDICALRED,
  },
});
