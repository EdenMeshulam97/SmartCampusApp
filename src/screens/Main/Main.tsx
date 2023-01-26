import { Text, View } from "react-native"
import React from 'react'
import { NavigationContainer, DrawerActions } from "@react-navigation/native"
import Home from '../Home/Home';
import Iot from '../Iot/Iot';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeaderMenuButton from "../../components/headerMenuButton/headerMenuButton";

const Drawer = createDrawerNavigator();

const Main = ()=>{
return(
    <NavigationContainer  >
    {
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerStyle:{backgroundColor:'white', alignSelf:'stretch', direction:"ltr"},
      drawerPosition:"left",headerTitleAlign:'center', headerLeft:()=>null, headerRight:()=> HeaderMenuButton() }}>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Iot" component={Iot} />
    </Drawer.Navigator>
    }
    
    </NavigationContainer>
)
}

export default Main