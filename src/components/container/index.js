import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {styles} from '../../screen/login/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {LAYOUT} from '../../layout';
import {useNavigation} from '@react-navigation/native';
import {removeItemAsync} from '../../helpers/helpingFunctions';
import {useDispatch} from 'react-redux';
import {clearUser} from '../../redux/reducers/userReducer';

const Container = ({
  children,
  title,
  heading,
  backIcon = true,
  icon,
  LogoutIcon,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={{flex: 1, color: '#fff'}}>
        <View style={styles.topTextContainer}>
          <View style={{position: 'absolute', left: 20, width: 20, height: 20}}>
            {backIcon ? (
              <Icon
                onPress={() => navigation.goBack()}
                name={'arrow-back'}
                size={18}
                color={LAYOUT.COLORS.S1}
              />
            ) : (
              <View />
            )}
          </View>
          <Text style={styles.welcomeTxt}>{heading}</Text>
          {LogoutIcon ? (
            <Icon
              onPress={() => {
                console.log('user dismiss');
                removeItemAsync('@user');
                dispatch(clearUser());
              }}
              name={LogoutIcon}
              size={20}
              color={LAYOUT.COLORS.S1}
              style={{left: LAYOUT.WIDTH / 3.2}}
            />
          ) : null}
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
            <Icon name={icon} color={LAYOUT.COLORS.P1} size={30} />
          ) : null}
        </View>
        {children}
      </View>
    </ScrollView>
  );
};
export default Container;
