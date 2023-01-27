import 'react-native-gesture-handler';
import * as React from 'react'
import {NativeBaseProvider} from "native-base"
import Main from './src/screens/Main/Main';
import {Provider} from 'react-redux';
import store from './src/redux/index';
import theme from './src/styles/theme'
import { ThemeProvider } from 'styled-components/native';


const App = ()=>{
return(
  <ThemeProvider theme={theme}>
    <NativeBaseProvider>
      <Provider store={store}>
        <Main/>
      </Provider>
    </NativeBaseProvider>
  </ThemeProvider>)
}


export default App
