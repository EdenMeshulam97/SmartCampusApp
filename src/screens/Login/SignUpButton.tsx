import {Spinner} from 'native-base';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Svg, {ForeignObject, G, Path, Text, TSpan, Rect} from 'react-native-svg';

interface SignUpButtonProps {
  onPress: () => void;
  loading?: boolean;
}
const SignUpButton: React.FC<SignUpButtonProps> = ({onPress, loading}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={110} height={45}>
        <G>
          <Rect width="110" height="45" rx="25" fill="#1f54d3" />
          {!loading && (
            <Text
              transform="translate(55.04 27.742)"
              fill="#fff"
              fontSize={14}
              fontWeight={700}>
              <TSpan x={-23.283} y={0}>
                {'Sign Up'}
              </TSpan>
            </Text>
          )}
        </G>
      </Svg>
      {loading && (
        <Spinner
          style={{position: 'absolute', top: 10, left: 45}}
          collapsable
          color={'white'}
        />
      )}
    </TouchableOpacity>
  );
};

export default SignUpButton;
