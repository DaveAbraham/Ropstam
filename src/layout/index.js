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
  LIGHT: 'sf-ui-display-light-58646b33e0551',
  REGULAR: 'sf-ui-display-black-58646a6b80d5a',
  MEDIUM: 'sf-ui-display-medium-58646be638f96',
  SEMI_BOLD: 'sf-ui-display-semibold-58646eddcae92',
  BOLD: 'sf-ui-display-bold-58646a511e3d9',
  HEAVY: 'sf-ui-display-heavy-586470160b9e5',
  THIN: 'sf-ui-display-thin-58646e9b26e8b',
  EXTRA_THIN: 'sf-ui-display-ultralight-58646b19bf205',
};
export const LAYOUT = {
  WIDTH,
  HEIGHT,
  COLORS,
  FONTS
};
