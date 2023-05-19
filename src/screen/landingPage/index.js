import { Text, View } from "react-native";
import React from 'react';
import {LAYOUT} from '../../layout';
import AppButton from '../../components/appButton';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.fullContainer}>
      {/*<Text style={styles.heading}>RopStam</Text>*/}
      <View style={styles.btnContainer}>
        <AppButton
          label={'signup'}
          labelColour={{color: '#292929'}}
          color={LAYOUT.COLORS.S5}
          onPress={() => navigation.navigate('SignupScreen')}
        />
        <AppButton
          label={'LOGIN'}
          labelColour={{color: '#fff'}}
          color={LAYOUT.COLORS.P1}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </View>
  );
};
export default LandingPage;
