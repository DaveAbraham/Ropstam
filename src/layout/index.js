import {Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const COLORS={
  P1:"#A268FF",
  P2:"#F47B50",
  P3:"#F79C7C",
  P4:"#F9BDA7",
  P5:"#FCDED3",
  S:"#292929",
  S1:"#686868",
  S2:"#898989",
  S3:"#A4A4A4",
  S4:"#CECECE",
  S5:"#E1E1E1",
  S6:"#F5F5F5",
  S7:"#F1F1F1",


}
const FONTS = {
  POP: 'Poppins-Bold',
  LIGHT: 'SFUIDisplay-Light',
  REGULAR: 'SFUIDisplay-Black',
  MEDIUM: 'SFUIDisplay-Medium',
  SEMI_BOLD: 'SFUIDisplay-Light',
  BOLD: 'SFUIDisplay-Bold',
  HEAVY: 'SFUIDisplay-Heavy',
  THIN: 'SFUIDisplay-Thin',
  EXTRA_THIN: 'SFUIDisplay-Ultralight',
};
export const LAYOUT = {
  WIDTH,
  HEIGHT,
  COLORS,
  FONTS
};
