import { Text, View } from "react-native"
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import Home from '../Home/Home';
import Iot from '../Iot/Iot';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const Main = ()=>{
return(
    <NavigationContainer>
    {
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Iot" component={Iot} />
    </Drawer.Navigator>
    }
    
    </NavigationContainer>
)
}

export default Main