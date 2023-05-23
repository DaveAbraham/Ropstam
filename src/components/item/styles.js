import {StyleSheet} from 'react-native';
import {LAYOUT} from '../../layout';
export const styles = StyleSheet.create({
  itemStyle: {
    // backgroundColor:"green",
    width: LAYOUT.WIDTH - 30,
    alignSelf: 'center',
    height: LAYOUT.HEIGHT / 5,
    borderRadius: 9,
    borderColor: LAYOUT.COLORS.S2,
    borderWidth: 0.5,
    flexDirection: 'row',
    marginBottom:10
  },
  itemImageView: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"red",
    width: LAYOUT.WIDTH / 3,
    height: LAYOUT.HEIGHT / 10,
    position: 'absolute',
    left: LAYOUT.WIDTH / 20,
    top: LAYOUT.HEIGHT / 32,
    borderRadius: 9,
    borderColor: LAYOUT.COLORS.P1,
    borderWidth: 1,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 9,
    resizeMode: 'cover',
  },
  itemDetailsView: {
    // backgroundColor: 'red',
    width: LAYOUT.WIDTH / 2,
    height: LAYOUT.HEIGHT / 8,
    position: 'absolute',
    right: LAYOUT.WIDTH / 30,
    top: LAYOUT.HEIGHT / 50,
    padding: 8,
  },
  detailHeading: {
    fontSize: 14,
    marginVertical: 3,
    fontFamily: LAYOUT.FONTS.BOLD,
    color: LAYOUT.COLORS.S,
    textAlign: 'center',
  },
});
