import React, {useCallback, useEffect, useState} from 'react';
import {serverLogin} from '../../services/serverApi';
import {useDispatch} from 'react-redux';
import {getUser} from '../../redux/userReducer';
import {useReduxDispatch} from '../../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLogin} from '../../redux/AuthenticationReducer';
import { AlertDialog } from 'native-base';
const useLogin = () => {
  
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const dispatch = useReduxDispatch();
  const onUserNameChange = (value: string) => setUserName(value);
  const onPasswordChange = (value: string) => setPassword(value);

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
    if (userName && password) {
      setLoading(true);
      const getUserResponse = await dispatch(
        getUser({email: userName, password}),
      );
      if (
        getUserResponse
      ) {
        setLoginError("Error");
      } else {
        setLoginError('');
      }
      setLoading(false);
    }
  }, [userName, password]);

  return {
    onPasswordChange,
    onUserNameChange,
    handleSubmit,
    userName,
    password,
    loading,
  };
};

export default useLogin;