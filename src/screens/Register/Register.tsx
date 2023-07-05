import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  LogoContainer,
  RegisterButtonContainer,
  RegisterContainer,
  TextInputsContainer,
} from './Register.styled';
import {AppTypography} from '../../styles/global.styled';
import {
  TypographyBold,
  TypographyColor,
  TypographySize,
} from '../../types/styles.d';
import {
  REGISTER_TITLE,
  PASSWORD_TEXTINPUT_PLACEHOLDER,
  CONFIRM_PASSWORD_TEXTINPUT_PLACEHOLDER,
  ROLE_TEXTINPUT_PLACEHOLDER,
  FIRST_NAME_TEXTINPUT_PLACEHOLDER,
  LAST_NAME_TEXTINPUT_PLACEHOLDER,
  RegisterStates,
  EMAIL_TEXTINPUT_PLACEHOLDER,
} from '../../utils/consts/Login';
import TextInput from '../../components/TextInput/TextInput';
import useRegister from './useRegister';
import CancelButton from './CancelButton';
import SignUpButton from './SignUpButton';
import SmartCampusLogo from '../../assets/SmartmpusLogo/SmartCampusLogo';
import { View } from 'native-base';
import { useNavigation } from '@react-navigation/native';


const Register = () => {
  const {
submitForm,
loading,
handleInputChange,

  } = useRegister();
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
      <View style={{backgroundColor:'white',flex:1}}>
      <LogoContainer style={{flex:0.3}}   >
              <SmartCampusLogo />
            </LogoContainer>
      <ScrollView style={{flex:0.7}} >
        <KeyboardAvoidingView
        enabled={true}
        
        style={{height:'100%'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        
          <RegisterContainer >
         
            <TextInputsContainer>
              <AppTypography
                textColor={TypographyColor.black}
                bold={TypographyBold.md}
                size={TypographySize.md}>
                {REGISTER_TITLE}
              </AppTypography>
              <TextInput
                placeholder={FIRST_NAME_TEXTINPUT_PLACEHOLDER}
                onChange={(text:string)=>handleInputChange(RegisterStates.firstName,text)}
                
              />
              <TextInput
                placeholder={LAST_NAME_TEXTINPUT_PLACEHOLDER}
                onChange={(text:string)=>handleInputChange(RegisterStates.lastName,text)}

              />
              <TextInput                 
                onChange={(text:string)=>handleInputChange(RegisterStates.email,text)}
                placeholder={EMAIL_TEXTINPUT_PLACEHOLDER} />
              <TextInput
                placeholder={PASSWORD_TEXTINPUT_PLACEHOLDER}
                onChange={(text:string)=>handleInputChange(RegisterStates.password,text)}
                secureTextEntry
              />
              <TextInput
                placeholder={CONFIRM_PASSWORD_TEXTINPUT_PLACEHOLDER}
                onChange={(text:string)=>handleInputChange(RegisterStates.confirmPassword,text)}
                secureTextEntry
              />
              <TextInput                 
                onChange={(text:string)=>handleInputChange(RegisterStates.role,text)}
                placeholder={ROLE_TEXTINPUT_PLACEHOLDER} />

              <RegisterButtonContainer>
                <CancelButton loading={loading} onPress={() => navigation.goBack()} />
                <SignUpButton loading={loading} onPress={submitForm} />
              </RegisterButtonContainer>
            </TextInputsContainer>
          </RegisterContainer>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
