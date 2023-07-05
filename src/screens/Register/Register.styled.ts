import styled from 'styled-components/native';

export const RegisterContainer = styled.View`
  justify-content: flex-start;
`;

export const LogoContainer = styled.View<{scale?: number}>`
  justify-content: flex-start;
  align-items: center;
  flex: 0.4;

`;

export const TextInputsContainer = styled.View`
  align-items: center;

`;

export const RegisterButtonContainer = styled.View`
  padding: ${({theme}) => theme.spacing.lg};
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;
