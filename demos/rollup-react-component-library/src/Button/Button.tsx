import * as React from 'react';
import { css } from '@emotion/react';

import type { ButtonProps } from './types';

const color = 'white';

const cssBtn = css`
  padding: 8px;
  background-color: hotpink;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    color: ${color};
  }
  border: 1px solid gray;
  transition: color 0.3s ease-in-out;
`;

const Button: React.FC<ButtonProps> = ({ text }) => <button css={cssBtn}>{ text }</button>;

export default Button;
