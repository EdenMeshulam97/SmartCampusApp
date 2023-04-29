import React, {useCallback, useEffect, useState} from 'react';
import {serverLogin} from '../../services/serverApi';
import {useDispatch} from 'react-redux';
import {getUser} from '../../redux/userReducer';
import {useReduxDispatch} from '../../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLogin} from '../../redux/AuthenticationReducer';
import {AlertDialog} from 'native-base';
const useRegister = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [role, setRole] = useState<string>();
  const [loading, setLoading] = useState(false);

  const dispatch = useReduxDispatch();
  const onFirstNameChange = (value: string) => setFirstName(value);
  const onLastNameChange = (value: string) => setLastName(value);
  const onEmailChange = (value: string) => setEmail(value);
  const onRoleChange = (value: string) => setRole(value);
  const onPasswordChange = (value: string) => setPassword(value);
  const onConfirmPasswordChange = (value: string) => setConfirmPassword(value);

  // const isTokenInStorage = useCallback(async () => {
  //   const isExist = await AsyncStorage.getItem('@token');
  //   if (isExist) {
  //     dispatch(setLogin(true));
  //   } else {
  //     dispatch(setLogin(false));
  //   }
  // }, []);

  // useEffect(() => {
  //   isTokenInStorage();
  // }, []);

  const handleSubmit = useCallback(async () => {
    dispatch(setLogin(true));
    if (firstName && lastName && email && role && password) {
      setLoading(true);
      // const getUserResponse = await dispatch(
      //   getUser({email: userName, password}),
      // );
      // if (getUserResponse) {
      //   setLoginError('Error');
      // } else {
      //   setLoginError('');
      // }
      //TODO: Change to register function
      setLoading(false);
    }
  }, [firstName, lastName, email, role, password]);

  return {
    onPasswordChange,
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onRoleChange,
    onConfirmPasswordChange,
    handleSubmit,
    firstName,
    lastName,
    email,
    password,
    role,
    loading,
    confirmPassword,
  };
};

export default useRegister;
