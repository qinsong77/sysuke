import '@emotion/react';

type ColorList = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};
declare module '@emotion/react' {
  export interface Theme {
    // palette: {
    //   primary: ColorList;
    //   secondary: ColorList;
    // };
    colors: {
      primary: string,
      secondary: string,
      error: string,
      warning: string,
      info: string,
      success: string,
    }
  }
}
