import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {styles} from '../../screen/login/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {LAYOUT} from '../../layout';
import {useNavigation} from '@react-navigation/native';

const Container = ({children, title, heading, icon}) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flex: 1, color: '#fff'}}>
        <View style={styles.topTextContainer}>
          <View style={{position: 'absolute', left: 20, width: 20, height: 20}}>
            <Icon
              onPress={() => navigation.goBack()}
              name={'arrow-back'}
              size={18}
              color={LAYOUT.COLORS.S1}
            />
          </View>
          <Text style={styles.welcomeTxt}>{heading}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            height: 50,
            width: '90%',
            justifyContent: 'space-between',
            marginBottom: 20,
            // backgroundColor:"red"
          }}>
          <Text
            style={{
              fontSize: 24,
              color: LAYOUT.COLORS.P1,
              fontFamily: LAYOUT.FONTS.SEMI_BOLD,
              fontWeight: '700',
            }}>
            {title}
          </Text>
          {icon ? (
            <Icon
              name={icon}
              color={LAYOUT.COLORS.P1}
              size={30}
            />
          ) : null}
        </View>
        {children}
      </View>
    </ScrollView>
  );
};
export default Container;
