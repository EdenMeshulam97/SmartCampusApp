import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
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
  USERNAME_TEXTINPUT_PLACEHOLDER,
  ROLE_TEXTINPUT_PLACEHOLDER,
  FIRST_NAME_TEXTINPUT_PLACEHOLDER,
  LAST_NAME_TEXTINPUT_PLACEHOLDER,
} from '../../utils/consts/Login';
import {RootState, useReduxSelector} from '../../redux';
import useLogin from './useRegister';
import TextInput from '../../components/TextInput/TextInput';
import useRegister from './useRegister';
import CancelButton from './CancelButton';
import SignUpButton from './SignUpButton';
import SmartCampusLogo from '../../assets/SmartmpusLogo/SmartCampusLogo';

const Register = () => {
  const {
    onPasswordChange,
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onRoleChange,
    loading,
    handleSubmit,
  } = useRegister();
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
    <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        enabled={true}
        style={{flex: 1}}
        contentContainerStyle={{backgroundColor: 'white'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <RegisterContainer style={{backgroundColor: 'white'}}>
            <LogoContainer scale={logoScale}>
              <SmartCampusLogo />
            </LogoContainer>
            <TextInputsContainer>
              <AppTypography
                textColor={TypographyColor.black}
                bold={TypographyBold.md}
                size={TypographySize.md}>
                {REGISTER_TITLE}
              </AppTypography>
              <TextInput
                placeholder={FIRST_NAME_TEXTINPUT_PLACEHOLDER}
                //onChange={}
              />
              <TextInput
                placeholder={LAST_NAME_TEXTINPUT_PLACEHOLDER}
                //onChange={}
              />
              <TextInput placeholder={USERNAME_TEXTINPUT_PLACEHOLDER} />
              <TextInput
                placeholder={PASSWORD_TEXTINPUT_PLACEHOLDER}
                secureTextEntry
              />
              <TextInput
                placeholder={CONFIRM_PASSWORD_TEXTINPUT_PLACEHOLDER}
                secureTextEntry
              />
              <TextInput placeholder={ROLE_TEXTINPUT_PLACEHOLDER} />

              <RegisterButtonContainer>
                <CancelButton loading={loading} onPress={handleSubmit} />
                <SignUpButton loading={loading} onPress={handleSubmit} />
              </RegisterButtonContainer>
            </TextInputsContainer>
          </RegisterContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Register;
