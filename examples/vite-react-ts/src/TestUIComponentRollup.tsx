import * as React from 'react';
import { MuiAutocomplete, MuiSimpleSnackbar, Checkbox , Button } from 'rollup-react-component-library';

export const TestUIComponentRollup: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <MuiAutocomplete />
      <MuiSimpleSnackbar />
      <Checkbox />
      <Button text={"Button"}/>
    </div>
  );
};
