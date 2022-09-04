import * as React from 'react';

export type ButtonProps = {
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'mini' | 'small' | 'middle' | 'large';
  block?: boolean;
  loading?: boolean | 'auto';
  loadingText?: string;
  loadingIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void> | unknown;
  type?: 'submit' | 'reset' | 'button';
  shape?: 'default' | 'rounded' | 'rectangular';
  children?: React.ReactNode;
};
