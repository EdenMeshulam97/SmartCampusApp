import styled from 'styled-components/native';
import {AppTypographyProps} from '../types/styles';

export const AppTypography = styled.Text<AppTypographyProps>`
  font-size: ${({size, theme}) => size ?? theme.typography.size.sm};
  font-weight: ${({bold, theme}) => bold ?? theme.typography.bold.sm};
  color: ${({textColor, theme}) =>
    textColor ?? theme.typography.colors.primary};
  white-space: nowrap;
`;