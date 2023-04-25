import theme from '../styles/theme.ts';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      forth: string;
    };
    statusColors: {
      danger: string;
      warning: string;
      ok: string;
    };
    typography: {
      size: {xs: string; sm: string; md: string; lg: string; xl: string};
      colors: {
        primary: string;
        secondary: string;
        white: string;
        forth: string;
      };
      bold: {sm: string; md: string; lg: string; xs: string};
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colorPallete: string[];
  }
}

export enum TypographySize {
  xs = theme.typography.size.xs,
  sm = theme.typography.size.sm,
  md = theme.typography.size.md,
  lg = theme.typography.size.lg,
}

export enum TypographyBold {
  xs = theme.typography.bold.xs,
  sm = theme.typography.bold.sm,
  md = theme.typography.bold.md,
  lg = theme.typography.bold.lg,
}
export enum TypographyColor {
  primary = theme.colors.primary,
  secondary = theme.colors.secondary,
  forth = theme.colors.forth,
  white = 'white',
  red = 'red',
  green = 'green',
  black = 'black',
}

interface AppTypographyProps {
  bold?: TypographyBold;
  size?: TypographySize;
  textColor?: TypographyColor;
}