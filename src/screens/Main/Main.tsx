import {Animated, I18nManager, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import Classes from '../Classes/Classes';
import Iot from '../Iot/Iot';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HeaderMenuButton from '../../components/headerMenuButton/headerMenuButton';
import {MainContainer} from './Main.styled';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Main = () => {
  I18nManager.allowRTL(false);

  const isUserLogin = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <MainContainer> 
      <NavigationContainer>
      {!isUserLogin ? (
       
          <Stack.Navigator
           initialRouteName="Login"
           screenOptions={{
           headerShown:false
          }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
          </Stack.Navigator>
        
      ) : (
        
          <Drawer.Navigator
            initialRouteName="Classes"
            screenOptions={{
              headerStyle: {
                backgroundColor: 'white',
              },
              drawerPosition: 'left',
              headerTitleAlign: 'center',
              headerLeft: () => HeaderMenuButton(),
              headerRight: () => null,
            }}>
            <Drawer.Screen name="Classes" component={Classes} />
            <Drawer.Screen name="Iot" component={Iot} />
          </Drawer.Navigator>
        
      )}
      </NavigationContainer>
    </MainContainer>
  );
};

export default Main;

function useLoaders(): {loadAppData: any} {
  throw new Error('Function not implemented.');
}

function createBottomTabNavigator() {
  throw new Error('Function not implemented.');
}

function useReduxDispatch() {
  throw new Error('Function not implemented.');
}
