import 'react-native-gesture-handler';
import * as React from 'react'
import { View } from 'react-native';
import {NativeBaseProvider} from "native-base"
import Main from './src/screens/Main/Main';
import {Provider} from 'react-redux';
import store from './src/redux/index';


const App = ()=>{
return(
  <NativeBaseProvider>
    <Provider store={store}>
      <Main/>
    </Provider>
  </NativeBaseProvider>
)
}


export default App
