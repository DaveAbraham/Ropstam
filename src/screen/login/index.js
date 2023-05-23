import React, {useState} from 'react';
import {View, Text} from 'react-native';
import TextField from '../../components/textInput';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {LAYOUT} from '../../layout';
import AppButton from '../../components/appButton';
import Container from '../../components/container';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/reducers/userReducer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.userReducer);
  const handleLogin = () => {
    dispatch(login({email, password}));
  };
  return (
    <Container title={'Login'} heading={'Welcome back'}>
      <View style={styles.topTextContainer}>
        <TextField
          placeholder={'Enter Email'}
          label={'User name'}
          icon={'person-outline'}
          keyboardType={'email-address'}
          value={email}
          onChangeText={val => setEmail(val)}
        />
        <TextField
          placeholder={'Enter Password'}
          label={'Enter your password'}
          icon={'lock-outline'}
          iconr={true}
          secureTextEntery={true}
          value={password}
          onChangeText={val => setPassword(val)}
        />
      </View>
      <View style={{marginVertical: 30}}>
        <AppButton
          isLoading={loading}
          color={email && password ? LAYOUT.COLORS.P1 : LAYOUT.COLORS.S4}
          label={'login'}
          onPress={handleLogin}
          labelColour={{color: email && password ? '#fff' : LAYOUT.COLORS.S}}
          // isLoading={loading}
          disabled={!(email && password) ? true : false}
        />
      </View>
    </Container>
  );
};

export default Login;
