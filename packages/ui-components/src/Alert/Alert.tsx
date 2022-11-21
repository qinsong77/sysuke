import * as React from "react";
import type { AlertProps } from "./types";
import Button from "../Button";

const Alert: React.FC<AlertProps> = () => {
  console.log('Alert');
  return (
    <div className={'alert'}>
      <Button text={'button'} />
      Alert
    </div>
  );
};

export default Alert;
