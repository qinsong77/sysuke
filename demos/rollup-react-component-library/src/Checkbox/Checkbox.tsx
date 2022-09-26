import * as React from 'react';
import type { CheckboxProps } from './types';
import { Checkbox as MuiCheckBox } from '@mui/material';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: orange
          }
        }
      },
    },
  },
});

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiCheckBox
        defaultChecked
        {...props}
      />
    </ThemeProvider>
  );
};

export default Checkbox;
