import * as React from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
//import {PolygonInput, PolygonInputContainer} from './Input.styled';
import theme from '../../styles/theme';
import { TextInputContainer, TextInput } from './TextInput.styled';


interface TextInputProps {
  secureTextEntry?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
}
const Input: React.FC<TextInputProps> = ({
  secureTextEntry,
  onChange,
  placeholder,
}) => {
  return (
    <TextInputContainer>
      <TextInput
        placeholderTextColor={theme.colors.primary}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        style={{color:theme.typography.colors.primary}}
      />
    </TextInputContainer>
  );
};

export default Input;