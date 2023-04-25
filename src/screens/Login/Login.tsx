import { Keyboard, Platform, TouchableWithoutFeedback,KeyboardAvoidingView ,ScrollView} from "react-native"
import React, { useEffect, useState } from 'react'
import { LoginButtonContainer, LoginContainer, LogoContainer, TextInputsContainer } from "./Login.styled"
import SmartCampusLogo from "../../assets/SmartmpusLogo/SmartCampusLogo"
import { AppTypography } from "../../styles/global.styled"
import { TypographyBold, TypographyColor, TypographySize } from "../../types/styles.d"
import { LOGIN_TITLE, PASSWORD_TEXTINPUT_PLACEHOLDER, USERNAME_TEXTINPUT_PLACEHOLDER } from "../../utils/consts/Login"
import SignInButton from "./SignInButton"
import { RootState, useReduxSelector } from "../../redux"
import useLogin from "./useLogin"
import TextInput from "../../components/TextInput/TextInput"

const Login = ()=>{

    const {onPasswordChange, onUserNameChange, loading, handleSubmit} =
      useLogin();
    const [logoScale, setLogoScale] = useState(0.8); 
  
    
  
    /**
     * Handle keyboard events.
     */
    useEffect(() => {
      Keyboard.addListener('keyboardWillShow', () => {
        setLogoScale(0.7);

      });
   
      Keyboard.addListener('keyboardWillHide', () => {
        setLogoScale(1);
      });
    }, []);
return (

    <TouchableWithoutFeedback  style={{flex:1}} onPress={Keyboard.dismiss}  >
      <KeyboardAvoidingView enabled={true}  style={{flex:1 }}  contentContainerStyle={{backgroundColor:'white'}}
behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
  <ScrollView contentContainerStyle={{flex:1}}>
        <LoginContainer style={{backgroundColor:'white'}} >
            <LogoContainer  scale={logoScale} >
                <SmartCampusLogo />
            </LogoContainer>
            <TextInputsContainer >
                <AppTypography 
                textColor={TypographyColor.black}
                bold={TypographyBold.md}
                size={TypographySize.md} 
                >
                    {LOGIN_TITLE}
                </AppTypography>
                <TextInput 
                placeholder={USERNAME_TEXTINPUT_PLACEHOLDER}
                //onChange={}
                />
                <TextInput
                placeholder={PASSWORD_TEXTINPUT_PLACEHOLDER}
                //onChange={}
                secureTextEntry
                />
                <LoginButtonContainer >
                    <SignInButton loading={loading} onPress={handleSubmit} />
                </LoginButtonContainer>
            </TextInputsContainer>
        </LoginContainer>
        </ScrollView>

        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
)}


export default Login


