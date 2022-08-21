import * as React from 'react';

export const Button = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <button onClick={() => setCounter((counter) => counter + 1)}>
      button {counter}
    </button>
  );
};
