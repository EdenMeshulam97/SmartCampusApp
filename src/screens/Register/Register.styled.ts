import styled from 'styled-components/native';

export const RegisterContainer = styled.View`
  justify-content: flex-start;
  flex: 1;
  background-color: white;
`;

export const LogoContainer = styled.View<{scale?: number}>`
  padding: ${({theme}) => theme.spacing.lg};
  justify-content: center;
  align-items: center;
  flex: 0.3;
  transform: ${({scale}) => `scale(${scale})`};
`;

export const TextInputsContainer = styled.View`
  flex: 0.6;
  align-items: center;
`;

export const RegisterButtonContainer = styled.View`
  padding: ${({theme}) => theme.spacing.lg};
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;
