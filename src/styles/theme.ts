import {DefaultTheme} from 'styled-components/native';

const theme: DefaultTheme = {
  colors: {
    primary: '#707070',
    secondary: '#274C6B',
    tertiary: '#417EBA',
    forth: '#CCCCCC',
  },
  statusColors: {
    danger: '#FF5852',
    warning: '#FFD500',
    ok: '#00FF88',
  },
  typography: {
    size: {xs: '11px', sm: '14px', md: '18px', lg: '28px', xl: '35px'},
    colors: {
      primary: '#7B7B7B',
      secondary: '#274C6B',
      white: 'white',
      forth: '#CCCCCC',
    },
    bold: {sm: '400', md: '500', lg: '700', xs: '100'},
  },

  spacing: {
    xs: '6px',
    sm: '12px',
    md: '16px',
    lg: '20px',
  },
  borderRadius: {
    sm: '5px',
    md: '12px',
    lg: '18px',
  },
  breakpoints: {
    xs: '600px',
    sm: '800px',
    md: '1000px',
    lg: '1200px',
    xl: '1440px',
  },
  colorPallete: [
    '#5D7DFF',
    '#FFAD5D',
    '#CE77FF',
    '#00D6CF',
    '#B7F876',
    '#FC5A5A',
    '#00FF27',
  ],
};

export default theme;