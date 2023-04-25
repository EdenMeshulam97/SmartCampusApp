import { Animated, I18nManager, Text, View } from "react-native"
import React from 'react'
import { NavigationContainer, DrawerActions } from "@react-navigation/native"
import Home from '../Home/Home';
import Iot from '../Iot/Iot';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeaderMenuButton from "../../components/headerMenuButton/headerMenuButton";
import { MainContainer } from "./Main.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import Login from "../Login/Login";





const Drawer = createDrawerNavigator();

const Main = ()=>{
  I18nManager.allowRTL(false);
  
  const isUserLogin = useSelector((state: RootState) => state.auth.isLoggedIn);


return(
  <MainContainer>

    {isUserLogin ? (
    
      <Login/>
    ) : (
      <NavigationContainer  >
        <Drawer.Navigator initialRouteName="Home" screenOptions={{headerStyle:{backgroundColor:'white', alignSelf:'stretch', direction:"ltr"},
                          drawerPosition:"left",headerTitleAlign:'center', headerLeft:()=>null, headerRight:()=> HeaderMenuButton() }}>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Iot" component={Iot} />
        </Drawer.Navigator>
      </NavigationContainer>
    )}
    
  </MainContainer>
)}

export default Main

function useLoaders(): { loadAppData: any; } {
  throw new Error("Function not implemented.");
}


function createBottomTabNavigator() {
  throw new Error("Function not implemented.");
}


function useReduxDispatch() {
  throw new Error("Function not implemented.");
}
