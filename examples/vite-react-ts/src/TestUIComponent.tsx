import * as React from 'react';
// import { Autocomplete, Button, Card, theme, ThemeProvider, SimpleSnackbar } from 'rollup-react-component-library';
import { Autocomplete, Button, Card, theme, ThemeProvider, SimpleSnackbar } from '@sysuke/ui-components';
// import {  Button, Card, theme, ThemeProvider } from '@sysuke/ui-components';

export const TestUIComponent: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Button
        color={'primary'}
        onClick={() => setCount((count) => count + 1)}>
        button
      </Button>
      <Card>{count}</Card>
      <Autocomplete />
      <SimpleSnackbar />
    </ThemeProvider>
  );
};
