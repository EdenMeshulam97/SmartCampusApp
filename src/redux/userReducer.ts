import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Iuser} from '../types/user.d';
import {
  //serverGetUsers,
  serverLogin,
  //serverGetUser,
} from '../services/serverApi';
import {setLogin} from './AuthenticationReducer';
//import {getCustomers} from './CustomerSlice';
//import {getDevices} from './DeviceSlice';
//import {getNotifications} from './NotificationSlice';
import {IUser} from '../types/user.d';

type loginObject = {
  email: string;
  password: string;
};

type UserState = {
  user: Iuser;
  users: IUser[];
  loading: boolean;
  error: string | null;
};



export const getUser = createAsyncThunk(
  'user/getUser',
  async ({email, password}: loginObject, thunkApi) => {
    try {
      const res = await serverLogin(email, password);
      if (res?.token) {
        await AsyncStorage.setItem('@token', res.token);
        await AsyncStorage.setItem('@user', JSON.stringify(res));
      }
    
      if (res?.token) {
        thunkApi.dispatch(setLogin(true));
      }
      if (res.error) {
        throw res;
      }
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  },
);

