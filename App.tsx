import 'react-native-gesture-handler';
import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home/Home';
import Iot from './src/screens/Iot/Iot';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const App = ()=>{
return(
<NavigationContainer>
{
  //   <Stack.Navigator >
  //   <Stack.Screen name="Home" component={Home} />
  //   <Stack.Screen name="Iot" component={Iot} />

  // </Stack.Navigator>
  <Drawer.Navigator>
  <Drawer.Screen name="Home" component={Home} />
  <Drawer.Screen name="Iot" component={Iot} />
</Drawer.Navigator>
}

</NavigationContainer>
)
}


export default App
