import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Container from '../../components/container';
import TextField from '../../components/textInput';
import AppButton from '../../components/appButton';
import {styles} from './styles';
import {LAYOUT} from '../../layout';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../redux/reducers/carsReducer';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.userReducer);

  const handleSignup = () => {
    if (!email ||  !password || !confirmPassword) {
      alert('All field are required');
      return false;
    }
    if (password != confirmPassword) {
      alert('Confirm password doesnot match');
      return false;
    }
    dispatch(signUp({name, email, password, confirmPassword}));
  };
  return (
    <Container title={'Signup'} heading={'Create account'}>
      <View style={styles.textFieldsContainer}>
        <TextField
          label={'Your Email'}
          icon={'account-circle'}
          placeholder={'Enter Email'}
          keyboardType={'email-address'}
          value={email}
          onChangeText={val => setEmail(val)}
        />
        <TextField
          label={'Password'}
          placeholder={'Enter Password'}
          icon={'lock-outline'}
          iconr={true}
          secureTextEntery={true}
          value={password}
          onChangeText={val => setPassword(val)}
        />
        <TextField
          label={'Confirm Password'}
          placeholder={'Confirm Password'}
          icon={'lock-outline'}
          iconr={true}
          secureTextEntery={true}
          value={confirmPassword}
          onChangeText={val => setConfirmPassword(val)}
        />
      </View>
      <View style={{marginTop: 20}}>
        <AppButton
          isLoading={loading}
          label={'Sign Up'}
          labelColour={{color: '#fff'}}
          color={
            !email  || !password || !confirmPassword
              ? LAYOUT.COLORS.S4
              : LAYOUT.COLORS.P1
          }
          onPress={handleSignup}
          disabled={
            !email  || !password || !confirmPassword ? true : false
          }
        />
      </View>
    </Container>
  );
};

export default SignUp;
