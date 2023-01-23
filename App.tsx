import 'react-native-gesture-handler';
import * as React from 'react'

import { View } from 'react-native';
import {NativeBaseProvider} from "native-base"
import Main from './src/screens/Main/Main';

const App = ()=>{
return(
  <NativeBaseProvider>
    <Main/>
  </NativeBaseProvider>
)
}


export default App
