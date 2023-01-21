import { createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from '.';

type AuthState = {
    isLoggedIn: boolean;
  };

const initialState: AuthState = {
    isLoggedIn: false
  };

export const setLogin = createAction('[USER] Set Login', (isLoggedIn: boolean) => {
return {
    payload: {
    isLoggedIn
    }
};
});

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(setLogin, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
    });
});
  
  export default authReducer;
