import {StyleSheet, PixelRatio} from 'react-native';
import {LAYOUT} from '../../layout';
console.log(PixelRatio.roundToNearestPixel(LAYOUT.HEIGHT / 24.5));
export const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: '100%',
    borderRadius: 10,
    // backgroundColor: '#000',
    borderColor: '#f15a24',
    fontSize: 12,
    fontFamily: LAYOUT.FONTS.MEDIUM,
    textAlign: 'center',
    color: '#000',
    textAlignVertical: 'center',
  },
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f15a24',
    height: PixelRatio.roundToNearestPixel(LAYOUT.HEIGHT / 19),
    width: LAYOUT.WIDTH - 40,
    alignItems: 'center',
  },
  icon: {
    marginLeft: LAYOUT.WIDTH / 20.6,
    marginRight: LAYOUT.WIDTH / 40.6,
    // backgroundColor:"green"
  },
  iconr: {
    marginLeft: LAYOUT.WIDTH / 45.6,
    // marginRight:LAYOUT.WIDTH/40.6,
  },
  label: {
    fontSize: 10,
    color: '#b2b2b2',
    marginBottom: 5,
    marginLeft: 1,
  },
});
