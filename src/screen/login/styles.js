import {StyleSheet} from 'react-native';
import {LAYOUT} from '../../layout';

export const styles = StyleSheet.create({
  topTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: LAYOUT.HEIGHT / 12,
    marginBottom: LAYOUT.HEIGHT / 16,
  },
  welcomeTxt: {
    color: LAYOUT.COLORS.REDICALRED,
    fontSize: 16,
    fontFamily: LAYOUT.FONTS.SEMI_BOLD,
  },
});
